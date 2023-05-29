import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className='Experience'>
        <div className="A"
        style={{
          color: "rgb(100, 255, 218)",
          display: "flex",
          flexDirection: "row",
          
        }}
      >
        03.{" "}
        <span
        className="aa"
          style={{
          
          }}
        >
          Where I've Worked
        </span>
        <div
        className="Head-Line"
        ></div>
      </div>
      <section>
        <div className='Experience-Left'>Feedbox</div>
        <div className='Experience-Right'>
            <div className='Right-Head'>
                <span>Frontend Developer Intern</span><a href="https://feedbox.co.in/" target="blank">@Feedbox</a>
                <div>Jan 2023 - 15 May 
                  <spna>
                    <a href="https://drive.google.com/file/d/1_cg7CSOZYTpc6LdSHNo5GGbifr8QU6b5/view?usp=sharing" target="blank">Certificate</a>
                  </spna>
                </div>
            </div>
            <div className='Right-List-Container'>
              {/* <ul> */}
                <div className='Right-List'>
                  <span>
                  &#8688;
                  </span>
                
                  Actively contributed to web development projects as a Web
                  Developer Intern at Feedbox, focusing on improving user
                  experience and ensuring code quality.
                </div>
                <div className='Right-List'>
                <span>
                &#8688;
                  </span>                
                  {/* Coordinated with 5 other developers and worked on several
                  projetcs */}
                  Collaborate with designers, project managers, and 
                  other engineers to transform creative concepts into
                  production realities for clients and stakeholders
                </div>
                <div className='Right-List'>
                  <span>
                  &#8688;
                  </span>                
                  Learned a lot about web development technologies and
                  frameworks such as HTML, CSS, JavaScript, React JS
                </div>                
            {/* </ul> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience