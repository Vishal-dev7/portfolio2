import React, { useEffect, useRef } from "react";
import Navbar from "../comps/navbar";
import heroImage from "../img/hero.jpg";
import vishal from "../img/vishal.jpg";
import Ap from "../img/aprilfool.gif";

const Home = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect = null;

    if (window.VANTA && window.VANTA.HALO) {
      effect = window.VANTA.HALO({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff0066,
        backgroundColor: 0x000000,
        xOffset: 0.18, // optional
        
      });
      
    }
    

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div id="home" className="text-white relative">
       {/* Direct Vanta Background */}
      <div
        ref={vantaRef}
        className=" top-0 left-0 w-full h-full -z-10 absolute"
      ></div>
      <Navbar />

     
   <section class="grid grid-cols-1 sm:grid-cols-2 pt-3 pb-10 -mb-5 ">
       
    <div class="order-2 sm:order-1 mt-3 sm:my-8  pl-12 sm:pt-5 md:pt-15 md:pl-10 lg:pl-30 lg:pt-30 xl:pl-70 2xl:my-auto">
      <h1 class="font-bold text-4xl md:text-5xl xl:text-6xl order-1 mb-6" data-aos="fade-up" data-aos-duration="1000">Vishal.R</h1>
      <h4 class="mt-4  sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-6" data-aos="fade-up" data-aos-duration="1000">FRONTEND DEVELOPER | GRAPHIC DESIGNER</h4>
      <p class="mt-2 mb-6">Turning ideas into beautiful, functional interfaces.
I specialize in building fast, responsive, and user-friendly web experiences.</p>
    {/* <button class="bg-gradient-to-r from-purple-600 to-red-500 border px-11 mt-2 text-white py-2 rounded-tr-2xl rounded-bl-2xl shadow-gray-700 shadow-md 2xl:ml-0 2xl:mt-4 border-none  2xl:px-20 2xl:py-5 2xl:text-2xl "><a href={Ap} download>Download CV</a></button> */}
 <a
  href={Ap}
  download
  className="bg-gradient-to-r from-purple-600 to-red-500 border-none px-11 mt-2 text-white py-2 rounded-tr-2xl rounded-bl-2xl shadow-gray-700 shadow-md 2xl:ml-0 2xl:mt-4 2xl:px-20 2xl:py-5 2xl:text-2xl inline-block text-center"
>
  Download CV
</a>

    </div>
     
   
  
    <div class='order-1 sm:order-2  mt-2 sm:mr-5 sm:mt-20 bg-transparent z-0 place-items-center ' >
     <img src={vishal} alt="abcd" class="rounded-full w-[35%] sm:w-[40%] md:w-[40%] lg:w-[30%] shadow-2xl shadow-black my-8 sm:my-20" data-aos="flip-left" data-aos-duration="2000" />
    </div>
    
   </section>
   
  
    </div>
  );
}

export default Home;