import React from 'react'

function About() {
  return (
    <>
    <section>
      <div className="bg-black text-white h-[100%]">{/* Content */}
        <div className="title"><span>About Me</span></div> {/* title */}
        <div className="details">{/* details */}
          <div className="left-img">{/* image anime character on left side */}

          </div>
          <div className="right"> {/* right  */}
            <div className="topic">Programming is my passion</div> {/* topic */}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, necessitatibus officia, sunt quasi asperiores illum dolorem autem ad perspiciatis eos a dicta voluptatibus! Eveniet, totam? Ducimus voluptas pariatur ut, non unde nostrum, autem recusandae aliquid et, in excepturi consequuntur quo culpa inventore quidem nihil voluptates.</p>
            <div className="button">{/* button */}
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
