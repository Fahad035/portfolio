import React, { useState } from 'react'
import { RiCloseLine, RiMenu2Line } from '@remixicon/react'
import logo1 from '../../assets/logo1.png'



const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className='flex w-full fixed top-0 z-50 items-center justify-between text-white left-0 pt-4 px-10 md:px-16 bg-slate-800/50 backdrop-blur-lg border-b border-slate-700 shadow-md transition-all duration-300'>
      <a href="#Home"><img src={logo1} alt="Brand" className="h-10 w-20" /></a>

      <ul className={`${
             menu ? 'flex flex-col items-center absolute top-20 right-0 bg-slate-800/90 p-8 rounded-lg' : 'hidden' 
      } md:flex md:items-center md:static md:bg-transparent md:p-0 md:flex-row gap-10 font-semibold`}>
        <a href="#Home">
        <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-[#f3349d] cursor-pointer'>Home</li>
        </a>
        <a href="#About">
        <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-[#f3349d] cursor-pointer'>About</li>
        </a>
        <a href="#Skills">
        <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-[#f3349d] cursor-pointer'>Skills</li>
        </a>
        <a href="#Projects">
        <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-[#f3349d] cursor-pointer'>Projects</li>
        </a>
        <a href="#Contact">
        <button className='relative inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold backdrop-blur-md
                 bg-white/10 text-white border border-white/20
                 hover:bg-white/20 active:scale-95 shadow-lg
                 transition-all duration-200'>Contact me</button>
        </a>
      </ul>
      <button className='md:hidden' onClick={() => setMenu(!menu)}>
        {menu ? (
          <RiCloseLine size={30} className='absolute right-10 top-6 transition-all duration-300' />
        ) : (
          <RiMenu2Line size={30} className='absolute right-10 top-6 transition-all duration-300' />
        )}
      </button>
    </nav>
  )
}

export default Navbar