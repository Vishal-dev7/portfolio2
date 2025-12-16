import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAV BAR */}
      <nav className="w-full flex justify-end sm:justify-center px-4 py-4 fixed top-0 z-50">
        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-8 bg-black text-white px-6 py-3 rounded-full shadow-md shadow-rose-600">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#social">Social</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="sm:hidden text-white z-50"
          aria-label="Open Menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 sm:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <ul className="mt-20 flex flex-col items-center gap-6 text-lg">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          <li><a href="#social" onClick={() => setOpen(false)}>Social</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
