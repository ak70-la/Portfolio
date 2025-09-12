import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import About from "./About";
import { useState, useEffect } from "react";

function Home() {
  
  return (
    <>
      <section class="bg-black text-white h-[100%] p-5">
        <div class="flex p-10">
          <div class="p-2.5">
            <img class="ml-20 mt-5 rounded-[100%] h-[450px] w-[325px] shadow-[0_0_25px_10px_#b74b4b] hover:scale-110" src="/anime-photo.jpeg" alt="My photo" />
          </div>
          <div class="w-100 ml-50 mt-13">{/* contant */}
            <h1 className="text-2xl ">
              Hey I'm <span className="text-highlight-text">Arafat Khan</span>
            </h1>
            <div className="text-5xl ">{/* typewriter */}
              I'm a<span className=""></span>
            </div>
            <br /> 
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              similique totam, a deserunt libero mollitia, eaque excepturi,
              neque esse perspiciatis beatae hic porro praesentium distinctio?
              Ex quos ad accusamus accusantium. Amet nobis sapiente odio, enim
              possimus ipsam rerum, laboriosam inventore praesentium alias
              veritatis illo expedita sed error cum laudantium repudiandae optio
              ducimus, temporibus saepe? Corrupti, reiciendis.
            </p>
            <div className="text-2xl p-2.5 space-x-3 ">{/* social links */}
              <a href="https://github.com/ak70-la"><FontAwesomeIcon className="border-2 rounded-full p-1 text-highlight-text hover:scale-150 " icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/arafat-lala-89a4a631b/"><FontAwesomeIcon className="border-2 rounded-full p-1 text-highlight-text hover:scale-150 " icon={faLinkedin} /></a>
              <a href="https://www.instagram.com/__ak.70_/"><FontAwesomeIcon className="border-2 rounded-full p-1 text-highlight-text hover:scale-150 " icon={faInstagram} /></a>
              <a href=""><FontAwesomeIcon className="border-2 rounded-full p-1 text-highlight-text hover:scale-150 " icon={faFacebook} /></a>
              <a href=""><FontAwesomeIcon className="border-2 rounded-full p-1 text-highlight-text hover:scale-150 " icon={faTwitter} /></a>
              <a href=""><FontAwesomeIcon className="border-2 rounded-full p-1 text-highlight-text hover:scale-150 " icon={faWhatsapp} /></a>
            </div>
            <div className="btn">
              <button className="bg-highlight-text w-50 ml-16 hover:bg-background hover:shadow-[1px_1px_5px_#ff6b6b]">Hire me</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
