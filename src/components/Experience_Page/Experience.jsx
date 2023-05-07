import React from 'react';
import "./Experience.css";

function Experience() {
  return (
    <div className='Experience'>
        <div
        style={{
          color: "rgb(100, 255, 218)",
          display: "flex",
          flexDirection: "row",
          fontSize: "32px"
        }}
      >
        03.{" "}
        <span
          style={{
            color: "rgb(204,215,247)",
            fontWeight: "bold",
            marginLeft: "20px"
          }}
        >
          Where I've Worked
        </span>
        <div
          style={{
            border: "1px solid rgb(136,147,177)",
            width: "300px",
            borderBottom: "none",
            borderLeft: "none",
            borderRight: "none",
            margin: "auto 0 auto 30px"
          }}
        ></div>
      </div>
      <section>
        <div className='Experience-Left'>Feedbox</div>
        <div className='Experience-Right'>
            <div className='Right-Head'>
                <span>Frontend Developer Intern</span><a href="https://feedbox.co.in/" target="blank">@Feedbox</a>
                <div>Jan 2023 - 15 May</div>
            </div>
            <div className='Right-List-Container'>
              {/* <ul> */}
                <div className='Right-List'>
                  <span>
                  &#8688;
                  </span>
                
                  Actively contribute to web development projects as a Web
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