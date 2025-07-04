import React, { useRef, useEffect, useState } from 'react';
import styles from "./styles/bubble.module.css";
const Navbar = () => {
  const sidenavRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Lock scroll and handle outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidenavRef.current && !sidenavRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.body.classList.add('overflow-hidden');
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  return (
    <div>
      <div className="flex justify-end items-center ">
        {/* <h1 className="font-bold text-xl md:text-2xl ml-3 pt-5 hover:animate-pulse hover:delay-100">Vishal R.</h1> */}
{/* <BubbleText /> */}
        {/* Desktop nav */}
        <div className="hidden sm:block items-center  mx-auto " >
         <div className='  flex items-center  p-3   bg-black text-white mx-auto mt-5 rounded-3xl shadow-sm shadow-rose-600 xl:px-5' >              
            <a href="#home" className="hover:underline mx-5 " >Home</a>
            <a href="#about" className="hover:underline mx-5">About</a>
            <a href="#contact" className="hover:underline mx-5 mr-2">Contact</a>
          </div>
        </div>

        {/* Hamburger icon */}
        <button onClick={() => setOpen(prev => !prev)} className="sm:hidden mr-3 mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30" className="w-8 h-8 text-white">
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 md:hidden ${open ? 'block' : 'hidden'}`}>
        <div
          ref={sidenavRef}
          className="absolute right-0 top-12 w-2/3 h-1/2 bg-gray-800 text-white transition-transform duration-500 ease-in-out scroll-smooth"
        >
          <ul className="mt-16 p-6 space-y-6 text-lg">
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {"Vishal.R".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Navbar;
