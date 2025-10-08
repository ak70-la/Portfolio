import React from "react";

function Skills() {
  return (
    <>
      <section
        id="skills"
        className="bg-black text-white h-[100%] p-4 w-auto"
      >
        <div className="mt-6 h-125">
          {/* Contant */}
          <div className="flex items-center justify-center p-2.5 mb-10 text-xl">
            {/* Title */}
            <span className="relative inline-block font-bold"> Skills
             <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-highlight-text"></span>      {/* upper full-width line */}
             <span className="absolute left-3 -bottom-2 h-0.5 w-1/2 bg-highlight-text"></span> 
            </span>
          </div>
          <div className="md:flex justify-center mt-25">{/* big screen css ::gap-10 p-20  */}
            {/* Details */}
            <div className="flex flex-col md:w-125">
              {/* text */}
              <div className="topic">Skills Reflects Our Knowledge</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                officia. Adipisci commodi possimus voluptatem temporibus tenetur
                quae molestiae, molestias magnam accusamus exercitationem
                explicabo cupiditate. Eum, eius. Perspiciatis reprehenderit
                debitis nobis, soluta veniam odit velit consequuntur quod
                distinctio a vero recusandae impedit accusantium. Eius, voluptas
                nobis?
              </p>
              <div className="flex mt-3">
                {/* experience */}
                <div className="text-6xl">00</div>
                {/* number */}
                <div className="mt-2.5 ml-1">
                  Years Of <br />
                  Experience
                </div>
              </div>
            </div>
            <div className="grid justify-center p-5 md:grid-cols-2 md:gap-x-30 gap-y-10 md:ml-20">{/* grid-cols-2 grid-rows-2 gap-x-40 gap-y-10 p-5 */}
              {/* boxes */}
              <div className="box">
                <div className="text-xs text-active text-shadow-[0_0_2px_#ff6b6b]">
                  MongoDB
                </div>
                <div className="text-5xl text-highlight-text mt-5">90%</div>
              </div>
              <div className="box">
                <div className="text-xs text-active text-shadow-[0_0_2px_#ff6b6b]">
                  Express
                </div>
                <div className="text-5xl text-highlight-text mt-5">80%</div>
              </div>
              <div className="box">
                <div className="text-xs text-active text-shadow-[0_0_2px_#ff6b6b]">
                  React
                </div>
                <div className="text-5xl text-highlight-text mt-5">70%</div>
              </div>
              <div className="box">
                <div className="text-xs text-active text-shadow-[0_0_2px_#ff6b6b]">
                  Node
                </div>
                <div className="text-5xl text-highlight-text mt-5">60%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
