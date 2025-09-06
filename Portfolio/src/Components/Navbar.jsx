import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
function Navbar() { 
  

  return (
    <>
       <nav class="bg-black ">
        <div class="flex items-center justify-between px-6">
          <div>
            <span class="text-[#b74b4b] p-4 text-lg font-bold">ARAFAT</span>
          </div>
          <div class="text-white gap-5 flex mx-auto">
            <NavLink to="/" class={({isActive}) => isActive ? "text-[#b74b4b]" : ""}>Home</NavLink>
            <NavLink to="about" class={({isActive}) => isActive ? "text-[#b74b4b]" : ""}>About</NavLink>
            <NavLink to="skills" class={({isActive}) => isActive ? "text-[#b74b4b]" : ""}>Skills</NavLink>
            <NavLink to="services" class={({isActive}) => isActive ? "text-[#b74b4b]" : ""}>Services</NavLink>
            <NavLink to="contact" class={({isActive}) => isActive ? "text-[#b74b4b]" : ""}>Contact</NavLink>
          </div>
        </div>
       </nav>
    </>
  )
}

export default Navbar
