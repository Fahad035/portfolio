import React, { useState, useEffect } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import logo1 from '../../assets/logo1.png';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic: If scrolled more than 20px, apply the solid background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`flex w-full fixed top-0 z-50 items-center justify-between text-white left-0 transition-all duration-300 px-10 md:px-16 
      ${isScrolled 
        ? 'bg-[#1f1f1f] py-3 shadow-xl border-b border-slate-700' // Scrolled State
        : 'bg-transparent py-6 border-b border-transparent'      // Top State
      }`}
    >
      <a href="#Home">
        <img src={logo1} alt="Brand" className="h-10 w-20 object-contain" />
      </a>

      {/* Navigation Links */}
      <ul className={`${
          menu 
            ? 'flex flex-col items-center absolute top-full right-0 bg-[#1f1f1f] w-full p-8 space-y-4 border-b border-slate-700' 
            : 'hidden' 
        } md:flex md:items-center md:static md:bg-transparent md:p-0 md:flex-row gap-10 font-semibold transition-all duration-300`}
      >
        <a href="#Home" onClick={() => setMenu(false)}>
          <li className='text-md transition-all duration-300 hover:text-[#f3349d] cursor-pointer'>Home</li>
        </a>
        <a href="#About" onClick={() => setMenu(false)}>
          <li className='text-md transition-all duration-300 hover:text-[#f3349d] cursor-pointer'>About</li>
        </a>
        <a href="#Skills" onClick={() => setMenu(false)}>
          <li className='text-md transition-all duration-300 hover:text-[#f3349d] cursor-pointer'>Skills</li>
        </a>
        <a href="#Projects" onClick={() => setMenu(false)}>
          <li className='text-md transition-all duration-300 hover:text-[#f3349d] cursor-pointer'>Projects</li>
        </a>
        <a href="#Contact" onClick={() => setMenu(false)}>
          <button className='relative inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold bg-white/10 text-white border border-white/20 hover:bg-[#f3349d] hover:border-[#f3349d] active:scale-95 shadow-lg transition-all duration-200'>
            Contact me
          </button>
        </a>
      </ul>

      {/* Mobile Menu Icon */}
      <button className='md:hidden z-50' onClick={() => setMenu(!menu)}>
        {menu ? (
          <RiCloseLine size={30} className='transition-all duration-300' />
        ) : (
          <RiMenu2Line size={30} className='transition-all duration-300' />
        )}
      </button>
    </nav>
  );
};

export default Navbar;