import React from "react";

function Home() {
  return (
    <>
      <section>
        <div class="bg-[var(--background)] h-[100vh]">
          <div className="image"></div>
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
