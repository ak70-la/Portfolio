import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
function Navbar() { 
  return (
    <>
       <nav class="flex no-underline h-8 gap-[25px] 
       bg-black text-white">
        <h1>ARAFAT</h1>
           <NavLink to="/" className={onclick}><li class="list-none">Home</li></NavLink>
           <NavLink to="about" className={({isactive}) => isactive ? "active" : ""}><li class="list-none">About</li></NavLink>
           <NavLink to="skills" className={({isactive}) => isactive ? "active" : ""}><li class="list-none">Skills</li></NavLink>
           <NavLink to="services" className={({isactive}) => isactive ? "active" : ""}><li class="list-none">Services</li></NavLink>
           <NavLink to="contact" className={({isactive}) => isactive ? "active" : ""}><li class="list-none">Contact</li></NavLink>   
       </nav>
    </>
  )
}

export default Navbar
