import React from "react";
import "./Skill.css";
import a1 from "../../assets/react.png";
import a2 from "../../assets/js.png";
import a3 from "../../assets/html.png";
import a4 from "../../assets/css.png";
import a5 from "../../assets/bootstrap2.png";
import a6 from "../../assets/Tailwind.png";
import a7 from "../../assets/git.png";
import a8 from "../../assets/vs.png";
import a9 from "../../assets/github.png";

function Skill() {
  const images = [
    {
      img: a1,
      name: "React JS",
    },
    {
      img: a2,
      name: "JavaScript",
    },
    {
      img: a3,
      name: "HTML5",
    },
    {
      img: a4,
      name: "CSS3",
    },
    {
      img: a5,
      name: "Bootstrap",
    },
    {
      img: a6,
      name: "Tailwind CSS",
    },
    {
      img: a7,
      name: "Git",
    },
    {
      img: a8,
      name: "Vs",
    },
    {
      img: a9,
      name: "Github",
    }
  ];
  return (
    <div className="Skill">
      <div
        style={{
          color: "rgb(100, 255, 218)",
          display: "flex",
          flexDirection: "row",
          fontSize: "30px",
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
          className="Head-Line"
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
