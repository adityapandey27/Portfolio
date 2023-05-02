import React, { useState, useEffect } from "react";

import { BiComment } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { MdModeComment } from "react-icons/md";
import "./Landing.css";

function Landing() {
  const languageGreetings = [
    { language: "Hindi", greeting: "नमस्ते" },
    { language: "English", greeting: "Hello " },
    { language: "Spanish", greeting: "Hola" },
    { language: "Italian", greeting: "Ciao" }
  ];
  const [currentGreeting, setCurrentGreeting] = useState("नमस्ते");
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreetingIndex(
        (greetingIndex) => (greetingIndex + 1) % languageGreetings.length
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const { greeting } = languageGreetings[greetingIndex];
    setCurrentGreeting(greeting);
  }, [greetingIndex]);

  return (
    <div className="Landing">
      <h1 className="Landing-Greating">{currentGreeting}</h1>
      <div className="Landing-Intro">
        <MdModeComment style={{ width: "70px", height: "70px" }} />
        <p>It's me</p>
      </div>
      <div className="Landing-About">Aditya Pandey</div>
      <div className="Landing-About-1">I like to develop new things</div>

      <div className="Landing-About-Para">
        A Frontend focused Web Developer building the Frontend of Websites and
        Web Applications that leads to the success of the overall product
      </div>

      <div className="Landing-Button-Container">
        <button className="Landing-Button">Check out my Projects!</button>
      </div>
    </div>
  );
}
export default Landing;
