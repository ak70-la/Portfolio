import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDisplay,
  faMobileScreen,
  faCamera,
  faCode,
  faUserSecret,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <>
      <section
        id="services"
        className="bg-background text-primary-text p-4 w-auto h-[100%]"
      >
        <div className="mt-6">
          {/* Contant */}
          <div className="flex items-center justify-center p-2.5 mb-10 text-xl">
            {/* title */}
            <span className="relative inline-block font-bold">
              {" "}
              Services
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-highlight-text"></span>{" "}
              {/* upper full-width line */}
              <span className="absolute left-4.5 -bottom-2 h-0.5 w-1/2 bg-highlight-text"></span>
            </span>
          </div>
          {/* main box containing carts and main container of services*/}
          <div className="grid sm:grid-cols-2 md:grid-rows-2 md:grid-cols-3 place-content-center gap-y-10 gap-x-10 mx-20 ">
            {/* cart 1 */}
            <div
              className="hover:shadow-[1px_1px_5px_#ff6b6b] group 
              hover:text-white hover:bg-active transition ease-in duration-150 p-3 rounded-4xl"
            >
              <div className="flex justify-evenly overflow-hidden">{/* icon */}
                {" "}
                <FontAwesomeIcon
                  className=" rounded-full bg-active p-3 group-hover:bg-white group-hover:text-highlight-text"
                  icon={faCode}
                />{" "}{/* For using the FontAwesome free icons import icon name from @fontawesome/free-solid-svg-icons */}
              </div>
              <div className="flex justify-evenly overflow-hidden p-2 m-1">{/* Heading */}
                Software Development
              </div>
              <p className="text-center">{/* info */}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                praesentium aspernatur dolorum fugit nostrum impedit quisquam
                incidunt quis.
              </p>
            </div>
            {/* cart 2 */}
            <div
              className="hover:shadow-[1px_1px_5px_#ff6b6b] group
              hover:text-white hover:bg-active transition ease-in duration-150 p-3 rounded-4xl"
            >
              <div className="flex justify-evenly overflow-hidden">
                {" "}
                <FontAwesomeIcon
                  className=" rounded-full bg-active p-3 group-hover:bg-white group-hover:text-highlight-text"
                  icon={faDisplay}
                />{" "}
              </div>
              <div className="flex justify-evenly overflow-hidden">
                Web Development
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                praesentium aspernatur dolorum fugit nostrum impedit quisquam
                incidunt quis.
              </p>
            </div>
            <div
              className="hover:shadow-[1px_1px_5px_#ff6b6b] group
              hover:text-white hover:bg-active transition ease-in duration-150 p-3 rounded-4xl"
            >
              {/* cart 3 */}
              <div className="flex justify-evenly overflow-hidden">
                {" "}
                <FontAwesomeIcon
                  className=" rounded-full bg-active p-3 group-hover:bg-white group-hover:text-highlight-text"
                  icon={faMobileScreen}
                />{" "}
              </div>
              <div className="flex justify-evenly overflow-hidden">
                App Development
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                praesentium aspernatur dolorum fugit nostrum impedit quisquam
                incidunt quis.
              </p>
            </div>
            <div
              className="hover:shadow-[1px_1px_5px_#ff6b6b] group
              hover:text-white hover:bg-active transition ease-in duration-150 p-3 rounded-4xl"
            >
              {/* cart 4 */}
              <div className="flex justify-evenly overflow-hidden">
                {" "}
                <FontAwesomeIcon
                  className=" rounded-full bg-active p-3 group-hover:bg-white group-hover:text-highlight-text "
                  icon={faPalette}
                />{" "}
              </div>
              <div className="flex justify-evenly overflow-hidden">
                UI/UX designer
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                praesentium aspernatur dolorum fugit nostrum impedit quisquam
                incidunt quis.
              </p>
            </div>
            <div
              className="hover:shadow-[1px_1px_5px_#ff6b6b] group
              hover:text-white hover:bg-active transition ease-in duration-150 p-3 rounded-4xl"
            >
              {/* cart 5 */}
              <div className="flex justify-evenly overflow-hidden">
                {" "}
                <FontAwesomeIcon
                  className=" rounded-full bg-active p-3 group-hover:bg-white group-hover:text-highlight-text "
                  icon={faUserSecret}
                />
              </div>
              <div className="flex justify-evenly overflow-hidden">
                Cyber security
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                praesentium aspernatur dolorum fugit nostrum impedit quisquam
                incidunt quis.
              </p>
            </div>
            <div
              className="hover:shadow-[1px_1px_5px_#ff6b6b] group
              hover:text-white hover:bg-active transition ease-in duration-150 p-3 rounded-4xl"
            >
              {/* cart 6 transition { transition ease-in duration-300 delay-100 } */}
              <div className="flex justify-evenly overflow-hidden">
                {" "}
                <FontAwesomeIcon
                  className=" rounded-full bg-active p-3 group-hover:bg-white group-hover:text-highlight-text"
                  icon={faCamera}
                />{" "}
              </div>
              <div className="flex justify-evenly overflow-hidden">
                Photograph
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                praesentium aspernatur dolorum fugit nostrum impedit quisquam
                incidunt quis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
