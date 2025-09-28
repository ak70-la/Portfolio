import React from "react";

function Services() {
  return (
    <>
      <section id="services" className="bg-background text-primary-text h-[100%] p-1">
        <div className="mt-6">{/* Contant */}
          <div className="flex items-center justify-center p-2.5 mb-10">{/* title */}
            <span>Services</span>
          </div>
          <div className="grid grid-rows-2 grid-cols-3 place-content-center mr-55 gap-y-10 gap-x-10 ml-70">{/* main box containing carts and main container of services*/}
            <div className="box">{/* cart 1 */}
              <div className="icon">{/* web devlopment icon*/}</div>
              <div className="topic">Software Development</div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                praesentium aspernatur dolorum fugit nostrum impedit quisquam
                incidunt quis.
              </p>
            </div>
            <div className="box">{/* cart 2 */}
              <div className="icon">{/* web devlopment icon*/}</div>
              <div className="topic">Web Development</div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                praesentium aspernatur dolorum fugit nostrum impedit quisquam
                incidunt quis.
              </p>
            </div>
            <div className="box">{/* cart 3 */}
              <div className="icon">{/* web devlopment icon*/}</div>
              <div className="topic">App Development</div>
              <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                praesentium aspernatur dolorum fugit nostrum impedit quisquam
                incidunt quis.
              </p>
            </div>  
            <div className="box">{/* cart 4 */}
              <div className="icon">{/* web devlopment icon*/}</div>
              <div className="topic">UI/UX designer</div>
              <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                praesentium aspernatur dolorum fugit nostrum impedit quisquam
                incidunt quis.
              </p>
            </div>  
            <div className="box">{/* cart 5 */}
              <div className="icon">{/* web devlopment icon*/}</div>
              <div className="topic">Cyber security</div>
              <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                praesentium aspernatur dolorum fugit nostrum impedit quisquam
                incidunt quis.
              </p>
            </div>  
            <div className="box">{/* cart 6 */}
              <div className="icon">{/* web devlopment icon*/}</div>
              <div className="topic">Photography</div>
              <p>
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
