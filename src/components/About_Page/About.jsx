import "./About.css";
import me from "../../assets/me.jpg";
function About() {
  return (
    <div className="About">
      <div
        style={{
          color: "rgb(100, 255, 218)",
          display: "flex",
          flexDirection: "row",
          fontSize: "32px"
        }}
      >
        01.{" "}
        <span
          style={{
            color: "rgb(204,215,247)",
            fontWeight: "bold",
            marginLeft: "20px"
          }}
        >
          About Me
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
        <div className="About-Left">
          <p>Hello! My name is <span className="About-Left-Highlight">Aditya Pandey</span>. I'm a Frontend Web Developer 
            building the Front-end of Websites and Web Applications that leads
             to the success of the overall product. Almost I have a <span className="About-Left-Highlight"> experience 
             of 5 months </span>in building responsive frontend web app.
          </p>
          <p>
            I am a self-taught <span className="About-Left-Highlight"> software developer</span> with a strong discipline to learn,
             improve, and evolve. I have done certification from <span className="About-Left-Highlight">NPTEL</span> and other renowned platform.
          </p>
          <p>
          I'm open to <span className="About-Left-Highlight"> Job opportunities</span> where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience 
          then don't hesitate to contact me.
          </p>
          <div className="About-Button-Container">
            <button className="About-Button">Contact Me!</button>
          </div>
        </div>
        <div className="About-Right">
          
          <div className="About-Right-Div">
            <img  src={me} alt="Aditya image"></img>
          </div>
          
        </div>
      </section>
    </div>
  );
}
export default About;
