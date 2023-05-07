import React from "react";
import "./Skill.css";
import a1 from "../../assets/css.png";
import a2 from "../../assets/git.png";
import a3 from "../../assets/html.png";
import a4 from "../../assets/js.png";
import a5 from "../../assets/react.png";
import a6 from "../../assets/vs.png";
import a7 from "../../assets/bootstrap2.png";
import a8 from "../../assets/github.png";
import a9 from "../../assets/Tailwind.png";
function Skill() {
  const images = [
    {
      img: a1,
      name: "CSS3",
    },
    {
      img: a2,
      name: "Git",
    },
    {
      img: a3,
      name: "HTML5",
    },
    {
      img: a4,
      name: "JavaScript",
    },
    {
      img: a5,
      name: "React JS",
    },
    {
      img: a6,
      name: "VS",
    },
    {
      img: a7,
      name: "Bootstrap",
    },
    {
      img: a8,
      name: "Github",
    },
    {
      img: a9,
      name: "Tailwind CSS",
    }
  ];
  return (
    <div className="Skill">
      <div
        style={{
          color: "rgb(100, 255, 218)",
          display: "flex",
          flexDirection: "row",
          fontSize: "32px",
        }}
      >
        02.{" "}
        <span
          style={{
            color: "rgb(204,215,247)",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          Skills & Tools
        </span>
        <div
          style={{
            border: "1px solid rgb(136,147,177)",
            width: "300px",
            borderBottom: "none",
            borderLeft: "none",
            borderRight: "none",
            margin: "auto 0 auto 30px",
          }}
        ></div>
      </div>

      <section >
        {images.map((data) => (
          <div>
            <img
              src={data.img}
              onMouseOver={(e) => (e.target.style.filter = "none")}
              onMouseOut={(e) => (e.target.style.filter = "grayscale(80%)")}
            ></img>
            <p>{data.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Skill;
