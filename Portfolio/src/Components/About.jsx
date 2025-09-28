import React from "react";

function About() {
  return (
    <>
      <section id="about" className="bg-black text-white h-[100vh] p-1">
        {/* Content */}
        <div className="mt-6">
          {/* title */}
          <div className="flex items-center justify-center p-2.5 mb-10">
            <span>About Me</span>
          </div>
          <div className="flex justify-center items-center ">
            {/* details */}
            <div className="flex">
              {/* image anime character on left side ml-20 mt-7 */}
              <img
                className="rounded-2xl h-[370px] w-auto shadow-[0_0_25px_10px_#b74b4b] hover:scale-110"
                src="/img.jpg"
                alt="My photo"
              />
            </div>
            <div className="w-175 ">
              {/* right  */}
              <div className="p-2 mt-8 text-2xl ml-30">
                Programming is my passion {/* topic */}
                <p className="text-[18px] mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                  necessitatibus officia, sunt quasi asperiores illum dolorem
                  autem ad perspiciatis eos a dicta voluptatibus! Eveniet,
                  totam? Ducimus voluptas pariatur ut, non unde nostrum, autem
                  recusandae aliquid et, in excepturi consequuntur quo culpa
                  inventore quidem nihil Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ut nesciunt dolore accusamus repudiandae
                  blanditiis odio laborum totam dolor quis omnis. Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Odit aliquid
                  quae autem libero, distinctio placeat, fugit iste ipsam sit
                  accusamus id natus quidem tempora deleniti! Optio atque et
                  incidunt rem earum sapiente, corrupti exercitationem!
                  Doloremque incidunt nam voluptatibus modi debitis adipisci
                  culpa ipsa asperiores aspernatur, delectus totam. Placeat,
                  soluta vitae?
                </p>
              </div>
              <div className="p-2 m-1 ml-28">
                {/* button */}
                <button
                  className="bg-highlight-text w-60 h-8 ml-40 rounded-[4px] 
              hover:bg-white hover:scale-120 hover:shadow-[1px_1px_5px_#ff6b6b] 
              hover:text-highlight-text hover:text-shadow-[1px_1px_15px_#FF6B6B]"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
