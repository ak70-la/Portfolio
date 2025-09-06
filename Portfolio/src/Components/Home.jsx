import React from "react";

function Home() {
  return (
    <>
      <section class="bg-black text-white h-[100%]">
        <div class="">
          <div class="p-2.5">
            <img class="ml-7 mt-5 rounded-[100%] h-[450px] w-[325px] shadow-[0_0_25px_10px_#b74b4b]   " src="/anime-photo.jpeg" alt="My photo" />
          </div>
          <div className="content">
            <h1>
              Hey I'm <span>Arafat Khan</span>
            </h1>
            <div className="typewriter">
              I'm a<span></span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              similique totam, a deserunt libero mollitia, eaque excepturi,
              neque esse perspiciatis beatae hic porro praesentium distinctio?
              Ex quos ad accusamus accusantium. Amet nobis sapiente odio, enim
              possimus ipsam rerum, laboriosam inventore praesentium alias
              veritatis illo expedita sed error cum laudantium repudiandae optio
              ducimus, temporibus saepe? Corrupti, reiciendis.
            </p>
            <div className="social-link">
              {/* <FontAwesomeIcon icon="fa-brands fa-github" />
              <FontAwesomeIcon icon="fa-brands fa-linked-in" />
              <FontAwesomeIcon icon="fa-brands fa-github" />
              <FontAwesomeIcon icon="fa-brands fa-github" /> */}
            </div>
            <div className="btn">
              <button>Hire me</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
