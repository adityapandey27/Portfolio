import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FiLinkedin } from "react-icons/fi";
import { GiHamburgerMenu } from 'react-icons/gi';

import { FiGithub } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";

function Navbar() {
  const [showNav,setShowNav]=useState(true);

  return (
    <>
      <div className="Fixed-Social">
        <div>
          <a href="https://github.com/adityapandey27" target="blank">
            <FiGithub size={18} />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/aditya272002/" target="blank">
            <FiLinkedin size={18} />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/0_o.aditya.0_o/" target="blank">
            <BsInstagram size={18} />
          </a>
        </div>
        <div>
          <a href="https://wa.me/9685812164" target="blank">
            <BsWhatsapp size={18} />
          </a>
        </div>
        <div>
          <a href="mailto:adityapandey@gmail.com" target="blank">
            <SiGmail size={18} />
          </a>
        </div>

        <hr></hr>
        
      </div>
      <span className="hamburgur1"
         onClick={()=>setShowNav(!showNav)}
      >
        <GiHamburgerMenu />
      </span>
      {
         showNav?<nav className="navbar">
      
         <div className="navbar-left">
           <img src={logo} alt="Logo" />
         </div>
         
          
           <div className="navbar-right">
           <ul>
             <li>
               <a href="https://github.com/adityapandey27" target="blank">
                 <span className="number">01.</span>Projects
               </a>
             </li>
             <li>
               <a href="mailto:adityapandey272002@gmail.com" target="blank">
                 <span className="number">02.</span>Contact
               </a>
             </li>
             <div className="li-resume-container">
               <li className="li-resume">
                 <a
                   href="https://drive.google.com/drive/folders/1xOpBgz98SbyvkKhoRnuwxnCfIn7Zzhmo?usp=sharing"
                   target="blank"
                 >
                   Resume
                 </a>
               </li>
             </div>
           </ul>
         </div>
         
         
       </nav>:""
      }
      
      <div className="Fixed-Social1">
        <a href="mailto:adityapandey272002@gmail.com">
          adityapandey272002@gmail.com
        </a>
        <hr></hr>
      </div>
    </>
  );
}
export default Navbar;
