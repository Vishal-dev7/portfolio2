// VantaBackground.jsx
import React, { useEffect, useRef } from "react";

const VantaBackground = () => {
  const vantaRef = useRef(null);

   useEffect(() => {
    let effect = null;

    if (window.VANTA && window.VANTA.HALO) {
      effect = window.VANTA.HALO({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x00ffff,
        backgroundColor: 0x000000,
      });
    }

    return () => {
      if (effect) effect.destroy();
    };
  }, []);
  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        xOffset: 0.18,
      }}
    />
  );
};

export default VantaBackground;
