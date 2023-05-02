import Landing from "./components/Landing_Page/Landing";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About_Page/About";
import "./Home.css";
function Home() {
  return (
    <div className="Home-Container">
      <Navbar />
      <Landing />
      <About />
    </div>
  );
}
export default Home;
