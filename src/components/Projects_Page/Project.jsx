import React from 'react'
import "./Project.css"
import a1 from "../../assets/css.png";
import a2 from "../../assets/git.png";
import a3 from "../../assets/html.png";


function Project() {
    const projectArray = [
        { id: 1, text: 'Some text 1', image:a1 },
        { id: 2, text: 'Some text 2', image:a2 },
        { id: 3, text: 'Some text 3', image: a3 },
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
          style={{
            color: "rgb(204,215,247)",
            fontWeight: "bold",
            marginLeft: "20px"
          }}
        >
          Projects I have Built
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
      <section className='Projects-Container'>
        {
         projectArray.map((obj,index)=>
         <div key={obj.id} className='Project-Card'>
            {
                index%2==0?<>
                    <img className='Project-Left' alt="" src={obj.image} />
                    <div className='Project-Right'>{obj.text}</div>
                    </>:<>
                    <div className='Project-Right'>{obj.text}</div>
                    <img className='Project-Left' alt="" src={obj.image}/>
                    </>
            }
        
        </div>
        )
        }
      </section>
    </div>
  )
}

export default Project