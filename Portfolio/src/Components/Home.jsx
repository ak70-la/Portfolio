import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faTwitter,} from "@fortawesome/free-brands-svg-icons";
import { TypeAnimation } from "react-type-animation";


function Home() {
  return (
    <>
      <section id="home" className="bg-black text-white h-[100vh] p-1">
        <div className="flex p-1 mt-6">
          <div className="flex ml-20 mt-7 ">
            <img 
            className="rounded-[100%] h-[560px] w-auto shadow-[0_0_25px_10px_#b74b4b] hover:scale-110" 
            src='/img.jpg' 
            alt="My photo" 
            />
          </div>
          <div className="w-135 ml-40 mt-22">
            {/* contant */}
            <h1 className="text-2xl ">
              Hey I'm
              <span className="text-highlight-text text-shadow-[1px_1px_15px_#FF6B6B]">
                Arafat Khan
              </span>
            </h1>
            <div className="text-4xl ">
              {/* typewriter */}
              I'm a{" "}
              <span className="font-serif text-highlight-text uppercase text-shadow-[1px_1px_15px_#b74b4b]">
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    800,
                    "",
                    800,
                    "Web Developer",
                    800,
                    "",
                    800,
                    "Cyber Security",
                    800,
                    "",
                    800,
                  ]}
                  speed={{ type: "keyStrokeDelayInMs", value: 125 }}
                  repeat={Infinity}
                />
              </span>
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
            <div className="text-2xl p-2.5 space-x-7 ml-12">
              {/* social links */}
              <a href="https://github.com/ak70-la" aria-label="Account of Linkedin a social media platform for contacting me">
                <FontAwesomeIcon
                  className="border-2 rounded-full p-1 hover:scale-150 bg-transparent text-highlight-text hover:text-black hover:bg-active hover:shadow-[0_0_10px_#ff6b6b]"
                  icon={faGithub}
                />
              </a>
              <a href="https://www.linkedin.com/in/arafat-lala-89a4a631b/" aria-label="Account of Linkedin a social media platform for contacting me">
                <FontAwesomeIcon
                  className="border-2 rounded-full p-1 hover:scale-150 bg-transparent text-highlight-text hover:text-black hover:bg-active hover:shadow-[0_0_10px_#ff6b6b]"
                  icon={faLinkedin}
                />
              </a>
              <a href="https://www.instagram.com/__ak.70_/" aria-label="Account of Linkedin a social media platform for contacting me">
                <FontAwesomeIcon
                  className="border-2 rounded-full p-1 hover:scale-150 bg-transparent text-highlight-text hover:text-black hover:bg-active hover:shadow-[0_0_10px_#ff6b6b]"
                  icon={faInstagram}
                />
              </a>
              <a href="" aria-label="Account of Linkedin a social media platform for contacting me">
                <FontAwesomeIcon
                  className="border-2 rounded-full p-1 hover:scale-150 bg-transparent text-highlight-text hover:text-black hover:bg-active hover:shadow-[0_0_10px_#ff6b6b]"
                  icon={faTwitter}
                />
              </a>
            </div>
            <div className="btn">
              <button className="bg-highlight-text w-30 h-8 ml-30 rounded-[4px] 
              hover:bg-background hover:scale-120 hover:shadow-[1px_1px_5px_#ff6b6b] 
              hover:text-highlight-text hover:text-shadow-[1px_1px_15px_#FF6B6B]">
                Hire me
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
