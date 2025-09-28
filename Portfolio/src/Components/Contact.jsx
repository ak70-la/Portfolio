import React from "react";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-background text-primary-text h-[80vh] p-1 "
      >
        <div className="mt-6">
          {/* contant */}
          <div className="flex items-center justify-center p-2.5 mb-10">
            {/* title */}
            <span>Contact me</span>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="uppercase">Have any Project ?</div>
            <div className="p-2 mt-20">
              <button
                className="bg-highlight-text w-100 h-8 rounded-[4px] 
              hover:bg-white hover:scale-120 hover:shadow-[1px_1px_15px_#ff6b6b] 
              hover:text-highlight-text hover:text-shadow-[1px_1px_15px_#FF6B6B]"
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
