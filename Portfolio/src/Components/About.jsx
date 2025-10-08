import React from "react";

function About() {
  const downloadcv = () => {
    const link = document.createElement(`a`);
    link.href = ``;/* file path */
    link.download = `ARAFAT_KHAN_CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <section id="about" className="bg-black text-white h-[100%] p-4 w-auto">
        {/* Content */}
        <div className="mt-6">
          {/* title */}
          <div className="flex items-center justify-center p-2.5 mb-10 text-xl ">
            <span className="relative inline-block font-bold"> About Me
             <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-highlight-text"></span>      {/* upper full-width line */}
             <span className="absolute left-5.5 -bottom-2 h-0.5 w-1/2 bg-highlight-text"></span> 
            </span>
          </div>

          <div className="lg:flex justify-center items-center p-10 gap-4">{/*  */}
            {/* details */}
            <div className="flex justify-center lg:ml-20">
              {/* image anime character on left side ml-20 mt-7 */}
              <img
                className="rounded-2xl h-[370px] w-auto shadow-[0_0_25px_10px_#b74b4b] hover:scale-110 transition ease-in duration-300 delay-100"
                src="/img.avif"
                alt="My photo"
                fetchPriority="high"
              />
            </div>
            <div className="flex flex-col justify-center lg:w-175">
              {/* right  */}
              <div className="flex flex-col justify-center items-center text-2xl p-2 mt-8 lg:ml-35">
                Programming is my passion {/* topic */}
                <p className="text-[18px] mt-3 md:w-145">
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
              <div className="flex justify-center p-2 lg:ml-25">{/* p-2 m-1 ml-28 */}
                {/* button */}
                <button
                  className="bg-highlight-text w-60 h-8 rounded-[4px] 
              hover:bg-white hover:scale-120 hover:shadow-[1px_1px_5px_#ff6b6b] 
              hover:text-highlight-text hover:text-shadow-[1px_1px_15px_#FF6B6B] transition ease-in duration-300 delay-100"
              onClick={downloadcv}
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
