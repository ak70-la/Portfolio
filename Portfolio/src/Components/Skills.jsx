import React from "react";

function Skills() {
  return (
    <>
      <section
        id="skills"
        className="bg-black text-white h-[100vh] p-1"
      >
        <div className="mt-6">
          {/* Contant */}
          <div className="flex items-center justify-center p-2.5 mb-10">
            {/* Title */}
            <span>My Skills</span>
          </div>
          <div className="flex justify-center gap-10">
            {/* Details */}
            <div className="w-125">
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
            <div className="grid grid-rows-2 grid-cols-2 gap-x-40 gap-y-10">
              {/* boxes */}
              <div className="box">
                <div className="text-xs text-highlight-text text-shadow-[0_0_2px_#ff6b6b]">
                  MongoDB
                </div>
                <div className="text-5xl text-highlight-text mt-5">90%</div>
              </div>
              <div className="box">
                <div className="text-xs text-highlight-text text-shadow-[0_0_2px_#ff6b6b]">
                  Express
                </div>
                <div className="text-5xl text-highlight-text mt-5">80%</div>
              </div>
              <div className="box">
                <div className="text-xs text-highlight-text text-shadow-[0_0_2px_#ff6b6b]">
                  React
                </div>
                <div className="text-5xl text-highlight-text mt-5">70%</div>
              </div>
              <div className="box">
                <div className="text-xs text-highlight-text text-shadow-[0_0_2px_#ff6b6b]">
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
