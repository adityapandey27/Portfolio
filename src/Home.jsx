import Landing from "./components/Landing_Page/Landing";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About_Page/About";
import Skill from "./components/Skills_Page/Skill";
import "./Home.css";
import Experience from "./components/Experience_Page/Experience";
import Project from "./components/Projects_Page/Project";
function Home() {
  return (
    <div className="Home-Container">
      <Navbar />
      <Landing />
      <About />
      <Skill/>
      <Experience/>
      <Project/>
    </div>
  );
}
export default Home;
