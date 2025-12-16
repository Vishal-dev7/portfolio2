import React, { useEffect, useRef } from "react";
import Navbar from "../comps/navbar";
import vishal from "../img/vishal.jpg";
import Cv from "../img/Vishal Resume.pdf";

const Home = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect;

    if (window.VANTA && window.VANTA.HALO) {
      effect = window.VANTA.HALO({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff0066,
        backgroundColor: 0x000000,
      });
    }

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      id="home"
      className="containere relative w-screen min-h-screen overflow-hidden text-white"
    >
      {/* VANTA BACKGROUND */}
      <div
        ref={vantaRef}
        className="hidden inset-0 -z-10"
      />

      <Navbar />

      {/* MAIN CONTENT */}
      <section className="  z-10 grid grid-cols-1 sm:grid-cols-2 px-10 sm:px-16 md:px-20 lg:px-24 pb-24 w-full">
         
        {/* LEFT */}
        <div className="mt-10 sm:mt-20 ">
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
                    className="bg-gradient-to-r from-purple-600 to-red-500 px-12 py-3 
                    rounded-tr-2xl rounded-bl-2xl shadow-md inline-block text-xl"
                  >
                    Download CV
                  </a>
                </div>

        {/* RIGHT */}
        <div className="order-1 sm:order-2 flex justify-center items-center mt-14 sm:mt-20 ">
                  <img
                    src={vishal}
                    alt="profile"
                    className="rounded-full w-[55%] sm:w-[60%] md:w-[50%] lg:w-[40%] shadow-2xl shadow-black"
                  />
                </div>

      </section>
    </div>
  );
};

export default Home;
