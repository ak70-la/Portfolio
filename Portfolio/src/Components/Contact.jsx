import React from "react";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-background text-primary-text h-[100%] p-3 w-auto "
      >
        <div className="mt-4 h-[80vh]">
          {/* contant */}
          <div className="flex items-center justify-center p-2.5 mb-10 text-xl">
            {/* title */}
            <span className="relative inline-block font-bold"> Contact
             <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-highlight-text"></span>      {/* upper full-width line */}
             <span className="absolute left-4.5 -bottom-2 h-0.5 w-1/2 bg-highlight-text"></span> 
            </span>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="uppercase mt-10">Have any Project ?</div>
            <div className="p-2 mt-20 ">
              <button
                className="bg-highlight-text w-60 h-8 rounded-[4px]  
              hover:bg-white hover:scale-120 hover:shadow-[1px_1px_15px_#ff6b6b] 
              hover:text-highlight-text hover:text-shadow-[1px_1px_15px_#FF6B6B] transition ease-in duration-300 delay-100 sm:w-80 md:w-100"
              >
                Let's Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
