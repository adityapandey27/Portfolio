import "./Navbar.css";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <a href="#about">
                <span className="number">01.</span>About
              </a>
            </li>
            <li>
              <a href="#skills">
                <span className="number">02.</span>Skills
              </a>
            </li>
            <li>
              <a href="#experience">
                <span className="number">03.</span>Experience
              </a>
            </li>
            <li>
              <a href="#projects">
                <span className="number">04.</span>Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                <span className="number">05.</span>Contact
              </a>
            </li>
            <div className="li-resume-container">
              <li className="li-resume">
                <span>Resume</span>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
