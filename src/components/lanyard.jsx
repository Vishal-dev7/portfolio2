// src/comps/lanyard/lanyard.jsx
/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

const cardGLB = '/lanyard/card.glb';
const lanyardTexture = '/lanyard/image.png';
const cardFaceTexture = '/lanyard/card-face2.png';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({
  gravity = [0, -40, 0],
  transparent = true,
  onThrowComplete,
}) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // On mobile: tighter fov + camera pulled back so card is visible from top
  const cameraPosition = isMobile ? [0, 0, 22] : [0, 0, 30];
  const fov = isMobile ? 28 : 20;

  return (
    <div className="relative z-10 w-full h-screen flex justify-center items-center">
      <Canvas
        camera={{ position: cameraPosition, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band isMobile={isMobile} onThrowComplete={onThrowComplete} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false, onThrowComplete }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef();
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };

  const { nodes, materials } = useGLTF(cardGLB);

  const lanyardTex = useTexture(lanyardTexture);
  const cardFaceTex = useTexture(cardFaceTexture);

  // ✅ Fix strap texture tiling
  lanyardTex.wrapS = lanyardTex.wrapT = THREE.RepeatWrapping;

  // ✅ Front face texture — flipY=false so it renders right-side-up on PlaneGeometry
  cardFaceTex.flipY = true;  // PlaneGeometry uses standard UV (flipY=true is default/correct)
  cardFaceTex.wrapS = THREE.ClampToEdgeWrapping;
  cardFaceTex.wrapT = THREE.ClampToEdgeWrapping;
  cardFaceTex.needsUpdate = true;

  // ✅ Generate back-face pattern texture via canvas — diagonal lines on dark bg
  const backTex = useMemo(() => {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Dark base
    ctx.fillStyle = '#080818';
    ctx.fillRect(0, 0, size, size);

    // Subtle diagonal grid lines
    ctx.strokeStyle = 'rgba(155, 93, 229, 0.12)';
    ctx.lineWidth = 1;
    const spacing = 20;
    for (let i = -size; i < size * 2; i += spacing) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + size, size);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i - size, size);
      ctx.stroke();
    }

    // Faint horizontal lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 0.5;
    for (let y = 0; y < size; y += 10) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(size, y);
      ctx.stroke();
    }

    // Center glow dot
    const grad = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    grad.addColorStop(0, 'rgba(155, 93, 229, 0.08)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(3, 4); // tile the pattern across the card back
    return tex;
  }, []);

  const [curve] = useState(
    () => new THREE.CatmullRomCurve3([
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
    ])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);
  const thrown = useRef(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.5, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });

      // ✅ FIX: Lower threshold so card disappears properly.
      // With fov=20 and camera at z=30, world y=-3 is already well below screen.
      // Previously -8 was unreachable — card would just swing forever.
      if (!dragged && !thrown.current) {
        const pos = card.current.translation();
        if (pos.y < -3) {
          thrown.current = true;
          onThrowComplete?.();
        }
      }
    }
  });

  curve.curveType = 'chordal';

  // ✅ On mobile: push the anchor group higher so card hangs from top edge of screen
  // On desktop: use standard y=4 anchor point
  const anchorY = isMobile ? 6 : 6;

  return (
    <>
      <group position={[0, anchorY, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.50}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={e => (
              e.target.setPointerCapture(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            )}
          >
            {/*
              Split the card into two PlaneGeometry meshes so each side
              gets its own independent material — no more UV bleeding.
              CuboidCollider half-extents are [0.8, 1.125, 0.01] so the
              plane size is width=1.6, height=2.25 (double the half-extents).
              scale on the parent group is 2.25, so PlaneGeometry(1, 1.4)
              maps cleanly to the collider footprint.
            */}

            {/* FRONT — your card-face.png texture, only renders on +Z side */}
            <mesh position={[0, 0, 0.01]}>
              <planeGeometry args={[1, 1.4]} />
              <meshPhysicalMaterial
                map={cardFaceTex}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.1}
                side={THREE.FrontSide}
              />
            </mesh>

            {/* BACK — diagonal grid pattern, only renders on -Z side */}
            <mesh position={[0, 0, -0.01]} rotation={[0, Math.PI, 0]}>
              <planeGeometry args={[1, 1.4]} />
              <meshPhysicalMaterial
                map={backTex}
                clearcoat={isMobile ? 0 : 0.8}
                clearcoatRoughness={0.2}
                roughness={0.4}
                metalness={0.3}
                side={THREE.FrontSide}
              />
            </mesh>

            {/* Card edge/body — keep original GLB geometry for the clip + clamp hardware */}
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={lanyardTex}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}