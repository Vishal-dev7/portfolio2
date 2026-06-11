// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../comps/navbar';
import vishal from '../img/vishal.jpg';
import Cv from '../img/Vishal Resume.pdf';
import Lanyard from './lanyard.jsx';

const Home = () => {
  const vantaRef = useRef(null);

  // ✅ Show lanyard ONLY on first visit per session
  const [showLanyard, setShowLanyard] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('lanyardSeen');
  });

  // Only show lanyard on desktop devices
  const [isDesktop, setIsDesktop] = useState(() => (
    typeof window !== 'undefined' && window.innerWidth >= 768
  ));
  

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = (e) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, []);

  const [fadeOut, setFadeOut] = useState(false);

  // ✅ When card is thrown — fade out, then unmount
  const handleThrowComplete = () => {
    setFadeOut(true);
    sessionStorage.setItem('lanyardSeen', 'true');
    setTimeout(() => setShowLanyard(false), 700); // matches CSS transition duration
  };

  useEffect(() => {
    let effect;
    if (window.VANTA && window.VANTA.HALO) {
      effect = window.VANTA.HALO({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0xff0066,
        backgroundColor: 0x000000,
      });
    }
    return () => { if (effect) effect.destroy(); };
  }, []);

  return (
    <div
      id="home"
      className="containere relative w-screen min-h-screen overflow-hidden text-white bg-black"
    >
      {/* VANTA Background */}
      <div ref={vantaRef} className="absolute inset-0 -z-10" />

      <Navbar />

      {/* MAIN CONTENT — always rendered underneath */}
      <section className="pt-5 md:pt-18 lg:pt-35 z-10 grid grid-cols-1 sm:grid-cols-2 px-10 sm:px-16 md:px-20 lg:px-28 lg:ml-5 pb-24 w-full">

        {/* LEFT — text */}
        <div className="order-2 sm:order-1 mt-10 sm:mt-20 neon-particles">
          <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl mb-6">
            Vishal.R
          </h1>

          <h4 className="text-2xl md:text-3xl mb-6">
            FRONTEND DEVELOPER | GRAPHIC DESIGNER
          </h4>

          <p className="mt-3 mb-6 text-md sm:text-xl">
            Turning ideas into beautiful, functional interfaces.
            I specialize in building fast, responsive, and user-friendly web experiences.
          </p>

          <a
            href={Cv}
            download
            className="bg-gradient-to-r from-purple-600 to-red-500 px-12 py-3 rounded-tr-2xl rounded-bl-2xl shadow-md inline-block text-xl hover:scale-105 transition"
          >
            Download CV
          </a>
        </div>

        {/* RIGHT — profile photo */}
        <div className="order-1 sm:order-2 flex justify-center items-center mt-14 sm:mt-20">
          <img
            src={vishal}
            alt="Vishal R — Frontend Developer"
            className="rounded-full w-[55%] sm:w-[60%] md:w-[50%] lg:w-[40%] shadow-2xl shadow-black"
          />
        </div>
      </section>

      {/* ✅ LANYARD OVERLAY — mounts only on first visit, unmounts after throw */}
      {showLanyard && isDesktop && (
        <div
          className="absolute inset-0 z-20"
          style={{
            transition: 'opacity 0.7s ease',
            opacity: fadeOut ? 0 : 1,
            pointerEvents: fadeOut ? 'none' : 'auto',
          }}
        >
          <Lanyard
            position={[0, 0, 30]}
            gravity={[0, -40, 0]}
            fov={20}
            transparent={true}
            onThrowComplete={handleThrowComplete}
          />

          {/* Hint text */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/90 text-sm whitespace-nowrap animate-bounce shadow-2xl"
            style={{
              transition: 'opacity 0.5s',
              opacity: fadeOut ? 0 : 1,
            }}
          >
            Pull and release the card to continue ↓
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;