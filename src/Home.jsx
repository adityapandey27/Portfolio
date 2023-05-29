import Landing from "./components/Landing_Page/Landing";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About_Page/About";
import Skill from "./components/Skills_Page/Skill";
import "./Home.css";
import Experience from "./components/Experience_Page/Experience";
import Project from "./components/Projects_Page/Project";
import Contact_Us from "./components/Contact_Us_Page/Contact_Us";
import Footer from "./components/Footer_Page/Footer";
function Home() {
  return (
    <div className="Home-Container">
      <Navbar />
      <Landing />
      <About />
      <Skill/>
      <Experience/>
      <Project/>
      <Contact_Us/>
      <Footer/>
    </div>
  );
}
export default Home;
