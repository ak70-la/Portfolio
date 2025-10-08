import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <>
      <section id="home" className="bg-black text-white h-[100%] p-1 w-auto box-border">
        <div className="flex flex-col justify-center p-8 lg:flex-row">
          <div className="flex justify-center lg:w-1/3">{/* flex justify-center mt-7 ml-20 */}
            <img
              className="rounded-[100%] w-auto shadow-[0_0_25px_10px_#b74b4b] hover:scale-110 transition ease-in duration-300 delay-100 h-52 max-w-full sm:h-80 md:h-96 lg:h-[560px]"
              src="/img.avif"
              alt="My photo"
              fetchPriority="high"
            />
          </div>
          <div className="flex flex-col justify-center items-center p-1 pt-7 lg:w-135 lg:items-start lg:ml-30 ">{/* w-135 ml-40 mt-22 */}
            {/* contant */}
            <h1 className="text-2xl ">
              Hey I'm {""}
              <span className="text-highlight-text text-shadow-[1px_1px_5px_#FF6B6B] ">
                Arafat Khan
              </span>
            </h1>
            <div className="text-4xl ">
              {/* typewriter  */}
              I'm a{" "}
              <span className="font-serif text-highlight-text uppercase text-shadow-[1px_1px_5px_#b74b4b]">
                {/* Type Animation utility was import to achive typing effect */}
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
            <p className=" text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              similique totam, a deserunt libero mollitia, eaque excepturi,
              neque esse perspiciatis beatae hic porro praesentium distinctio?
              Ex quos ad accusamus accusantium. Amet nobis sapiente odio, enim
              possimus ipsam rerum, laboriosam inventore praesentium alias
              veritatis illo expedita sed error cum laudantium repudiandae optio
              ducimus, temporibus saepe? Corrupti, reiciendis.
            </p>
            <div className="text-2xl space-x-4 p-3 lg:ml-35">{/* p-2.5 space-x-7 ml-12 */}
              {/* social links */}
              <a
                href="https://github.com/ak70-la"
                aria-label="Account of Linkedin a social media platform for contacting me"
              >
                <FontAwesomeIcon
                  className="border-2 rounded-full p-1 hover:scale-150 bg-transparent text-highlight-text hover:text-black hover:bg-active hover:shadow-[0_0_10px_#ff6b6b] transition ease-in duration-150 delay-70"
                  icon={faGithub}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/arafat-lala-89a4a631b/"
                aria-label="Account of Linkedin a social media platform for contacting me"
              >
                <FontAwesomeIcon
                  className="border-2 rounded-full p-1 hover:scale-150 bg-transparent text-highlight-text hover:text-black hover:bg-active hover:shadow-[0_0_10px_#ff6b6b] transition ease-in duration-150 delay-70"
                  icon={faLinkedin}
                />
              </a>
              <a
                href="https://www.instagram.com/__ak.70_/"
                aria-label="Account of Linkedin a social media platform for contacting me"
              >
                <FontAwesomeIcon
                  className="border-2 rounded-full p-1 hover:scale-150 bg-transparent text-highlight-text hover:text-black hover:bg-active hover:shadow-[0_0_10px_#ff6b6b] transition ease-in duration-150 delay-70"
                  icon={faInstagram}
                />
              </a>
              <a
                href=""
                aria-label="Account of Linkedin a social media platform for contacting me"
              >
                <FontAwesomeIcon
                  className="border-2 rounded-full p-1 hover:scale-150 bg-transparent text-highlight-text hover:text-black hover:bg-active hover:shadow-[0_0_10px_#ff6b6b] transition ease-in duration-150 delay-70"
                  icon={faTwitter}
                />
              </a>
            </div>
            <div className="lg:ml-50">
              <button
                className="bg-highlight-text w-30 h-8 rounded-[4px] 
              hover:bg-background hover:scale-120 hover:shadow-[1px_1px_5px_#ff6b6b] 
              hover:text-highlight-text hover:text-shadow-[1px_1px_5px_#FF6B6B] transition ease-in duration-300 delay-100"
              >{/* ml-30 */}
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
