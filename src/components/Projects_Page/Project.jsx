import React from 'react'
import "./Project.css"
import img1 from "../../assets/Projects/HayNeedle1.jpg"
import img2 from "../../assets/Projects/HayNeedle2.jpg"
import img3 from "../../assets/Projects/HayNeedle3.jpg"
import img4 from "../../assets/Projects/HayNeedle4.jpg"
import img5 from "../../assets/Projects/HayNeedle5.jpg"
import img6 from "../../assets/Projects/HayNeedle6.jpg"
import img7 from "../../assets/Projects/Movies1.jpg"
import img8 from "../../assets/Projects/Movies2.jpg"
import img9 from "../../assets/Projects/Movies3.jpg"
import img10 from "../../assets/Projects/Mural1.jpg"
import img11 from "../../assets/Projects/Mural2.jpg"
import img12 from "../../assets/Projects/Mural3.jpg"
import img13 from "../../assets/Projects/Mural4.jpg"
import img14 from "../../assets/Projects/Mural5.jpg"
import img15 from "../../assets/Projects/Mural6.jpg"
import img16 from "../../assets/Projects/Mural7.jpg"
import img17 from "../../assets/Projects/Mural8.jpg"
import img18 from "../../assets/Projects/carRental.jpg"
import img19 from "../../assets/Projects/tindog.jpg"
import { FiGithub } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi';

function Project() {
    const projectArray = [
        { id: 1, title: 'Hayneedle', image:img1,description:
        "I have developed the front page of the Hayneedle website. My project includes a unique feature that allows users to customize the images by replacing various elements such as the car, boy, tree, background, boat, fish, etc., with ones of their choice.",
          skills:{
            newSkills:["React JS", "CSS 3", "Bootstrap", "Vs Code"]
          },git:"https://github.com/adityapandey27/hayneedle",host:"https://hayneedle-clone.netlify.app/"
        },
        { id: 2, title: 'Mural', image:img10,description:
        "I developed the front page of the Mural website. This website is visually apealling.",
          skills:{
            newSkills:["React JS", "CSS 3", "Vs Code"]
          },git:"https://github.com/adityapandey27/mural",host:"https://mural-clone.netlify.app/"
        },
        { id: 3, title: 'Car Rental', image:img18,description:
        "I have developed a clone of Car Rento Movies where users can visit each page and view the content.",
          skills:{newSkills:["React JS", "CSS 3", "Bootstrap", "Vs Code"]},
          git:"https://github.com/adityapandey27/Rento4",
          host:"https://rento4.netlify.app/"
        },
        { id: 4, title: 'Tindog', image:img19,description:"It is a simple and clean website consisting of four pages. The website has been developed using HTML, CSS, and JavaScript.",
          skills:{newSkills:["HTML", "CSS 3","Java Script", "Vs Code"]},
          git:"https://github.com/adityapandey27/tindog",
          host:""
        },
        { id: 5, title: 'Movies', image:img7,description:"It is a platform where users can view the top trending movies along with their titles and banners. If a user likes a particular movie, they can tag it as a favorite and access their list of favorites in a separate section called 'Favorites.' In this section, movies can be compared based on their ratings and categories.",
          skills:{newSkills:["React JS", "Tailwind", "TMDB Api", "Vs Code"]},
          git:"https://github.com/adityapandey27/movie",
           host:"https://imdb-clone-feedbox.netlify.app"
        },
      ];
  return (
    <div className='Project'>
        <div
        style={{
          color: "rgb(100, 255, 218)",
          display: "flex",
          flexDirection: "row",
          fontSize: "32px"
        }}
      >
        04.{" "}
        
        <span
        className='A'
        >
          Projects I have Built
        </span>
        <div className='Head-Line'
          
        ></div>
      </div>
      <section className='Projects-Container'>
        {
         projectArray.map((obj,index)=>
         <div key={obj.id} className='Project-Card'>
            {
                index%2==0 ?
                <div  className='Project-Each-Card'>
                    
                    <img className='Project-Left' 
                     onMouseOver={(e) => (e.target.style.filter = "none")}
                     onMouseOut={(e) => (e.target.style.filter = "grayscale(80%)")}
                    alt="" src={obj.image}  />
                    <div className='Project-Right Project-Right1' >
                      
                      <div style={{fontSize:"13px",color:"#64ffda"}}>Featured Project</div>
                      <h1 style={{color:"#ccd6f6"}}>{obj.title}</h1>
                      <div className='Project-Description Project-Description1'>
                          {
                            obj.description
                          }
                      </div>
                      <div className='Project-Skill-Used Project-Skill-Used1'>
                        <ul className='List1'>
                          {
                            obj.skills.newSkills.map((data,index)=>(<li key={index}>{data}</li>))
                          }
                          
                        </ul>
                      </div>
                      <div className='Project-Links'>
                        <a href={obj.git} target="blank">
                          <FiGithub 
                          />
                        </a>
                        <a href={obj.host} target="blank">
                          <BiLinkExternal
                          />
                        </a>
                      </div>
                      </div>
                      
                    </div>:
                    <div className='Project-Each-Card Project-Each-Card1'>
                    <div className='Project-Right Project-Right2' >
                      
                    <div style={{fontSize:"13px",color:"#64ffda"}}>Featured Project</div>
                    <h1 style={{color:"#ccd6f6"}}>{obj.title}</h1>
                      <div className='Project-Description Project-Description2'>
                       
                          {
                            obj.description
                          }
                      </div>
                      <div className='Project-Skill-Used'>
                        <ul className='List2'>
                         {
                            obj.skills.newSkills.map((data,index)=>(<li key={index}>{data}</li>))
                          }
                        </ul>
                      </div>
                      <div className='Project-Links'>
                      <a href={obj.git} target="blank">
                          <FiGithub 
                          />
                        </a>
                        <a href={obj.host} target="blank">
                          <BiLinkExternal
                          />
                        </a>
                      </div>
                      </div>
                      
                    <img className='Project-Left Project-Left1' 
                     onMouseOver={(e) => (e.target.style.filter = "none")}
                     onMouseOut={(e) => (e.target.style.filter = "grayscale(60%)")}
                    alt="" src={obj.image}/>
                    </div>
            }
        
        </div>
        )
        }
      </section>
    </div>
  )
}

export default Project