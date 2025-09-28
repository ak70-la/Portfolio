import React from 'react';


function Navbar() { 


  return (
    <>
       <nav className='bg-background w-full flex justify-around p-2 sticky top-0'>
          <div>
            <span className="text-[#b74b4b] p-4 text-lg font-bold text-shadow-[1px_1px_15px_#FF6B6B]">ARAFAT</span>
          </div>
          <div className="text-white gap-5 flex">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
       </nav>
    </>
  )
}

export default Navbar
