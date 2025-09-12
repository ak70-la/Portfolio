import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
function Navbar() { 
const [active, setactive] = useState("");
function highlight () {
  setactive("bg-red-500");
}



  return (
    <>
       <nav class="bg-black ">
        <div class="flex items-center justify-between px-6">
          <div>
            <span class="text-[#b74b4b] p-4 text-lg font-bold text-shadow-[1px_1px_15px_#FF6B6B] ">ARAFAT</span>
          </div>
          <div class="text-white gap-5 flex mx-auto">{/* hover effect {hover:text-highlight-text hover:underline} */}
            <NavLink to="/"  className={({ isActive }) =>
              isActive ? "bg-[rgb(255,107,107)] rounded-3xl p-1" : ""}>Home</NavLink>
            <NavLink to="about"  className={({ isActive }) =>
              isActive ? "bg-[#FF6B6B] rounded-3xl p-1" : ""}>About</NavLink>
            <NavLink to="skills"  className={({ isActive }) =>
              isActive ? "bg-[#FF6B6B] rounded-3xl p-1" : ""}>Skills</NavLink>
            <NavLink to="services"  className={({ isActive }) =>
              isActive ? "bg-[#FF6B6B] rounded-3xl p-1" : ""}>Services</NavLink>
            <NavLink to="contact"  className={({ isActive }) =>
              isActive ? "bg-[#FF6B6B] rounded-3xl p-1" : ""}>Contact</NavLink>
          </div>
        </div>
       </nav>
    </>
  )
}

export default Navbar
