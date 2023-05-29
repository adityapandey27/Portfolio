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
          fontSize: "30px",
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
            
          }}
        ></div>
      </div>
      <section>Get In Touch</section>
      <p>Feel free to Contact me for any opportunities, questions or just want to contact me, my indox is always open.</p>
      <div className="Contact-Us-Button-Container">
        
        <button className="Contact-Us-Button"
        onClick={()=>window.open('mailto:adityapandey272002@gmail.com')}
        >Say Hello</button>
      </div>
      
    </div>
  )
}

export default Contact_Us