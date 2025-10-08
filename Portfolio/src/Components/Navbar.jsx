import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-background w-auto flex p-1 justify-between sticky top-0 sm:justify-around ">{/* justify-between sm:justify-around p-1 md:p-1 md:sticky top-0 */}
        <div>
          <span className="text-highlight-text p-1 md:p-4 text-lg font-bold text-shadow-[1px_1px_8px_#FF6B6B]">
            ARAFAT
          </span>
        </div>
        {/* hamburger effect and icon */}
        <button className="sm:hidden w-10 h-7 absolute right-8 top-1" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon
            className="bg-white w-6 h-6"
            icon={menuOpen ? faTimes : faBars}
          />
        </button>
        <div className={`text-white gap-5 flex flex-col mt-7 sm:mt-0 sm:flex-row ${menuOpen ? "flex" : "hidden"} sm:flex`}>
          <a
            href="#home"
            className="relative group text-white font-medium cursor-pointer"
          >
            Home
            <span
              className="absolute left-0 -bottom-1 w-full h-0.5 bg-highlight-text
                   scale-x-0 group-hover:scale-x-100 origin-left
                   transition-transform duration-300"
            />
          </a>
          <a
            href="#about"
            className="relative group text-white font-medium cursor-pointer"
          >
            About
            <span
              className="absolute left-0 -bottom-1 w-full h-0.5 bg-highlight-text
                   scale-x-0 group-hover:scale-x-100 origin-left
                   transition-transform duration-300"
            />
          </a>
          <a
            href="#skills"
            className="relative group text-white font-medium cursor-pointer"
          >
            Skills
            <span
              className="absolute left-0 -bottom-1 w-full h-0.5 bg-highlight-text
                   scale-x-0 group-hover:scale-x-100 origin-left
                   transition-transform duration-300"
            />
          </a>
          <a
            href="#services"
            className="relative group text-white font-medium cursor-pointer"
          >
            Services
            <span
              className="absolute left-0 -bottom-1 w-full h-0.5 bg-highlight-text
                   scale-x-0 group-hover:scale-x-100 origin-left
                   transition-transform duration-300"
            />
          </a>
          <a
            href="#contact"
            className="relative group text-white font-medium cursor-pointer"
          >
            Contact
            <span
              className="absolute left-0 -bottom-1 w-full h-0.5 bg-highlight-text
                   scale-x-0 group-hover:scale-x-100 origin-left
                   transition-transform duration-300"
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
