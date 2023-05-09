import React from 'react'
import "./Contact_Us.css"
function Contact_Us() {
  return (
    <div className='Contact_Us'>
        <div
        style={{
          color: "rgb(100, 255, 218)",
          display: "flex",
          flexDirection: "row",
          fontSize: "32px",
          margin:"0 auto",
          width:"fit-Content"
        }}
      >
        05.{" "}
        <span
          style={{
            color: "rgb(204,215,247)",
            fontWeight: "bold",
            marginLeft: "20px"
          }}
        >
          What Is Next
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
      <section>Get In Touch</section>
      <p>Feel free to Contact me for any opportunities, questions or just want to contact me, my indox is always open.</p>
      <div className="Contact-Us-Button-Container">
        
        <button className="Contact-Us-Button"
        onClick={()=>window.open('mailto:recipient@example.com')}
        >Say Hello</button>
      </div>
      {/* <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h2>Front side</h2>
          </div>
        <div class="flip-card-back">
        <h2>Back side</h2>
       </div>
      </div>
    </div> */}
    </div>
  )
}

export default Contact_Us