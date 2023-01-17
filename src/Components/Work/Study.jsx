import React from 'react'
import Studies from './Studies'
import { Typewriter } from 'react-simple-typewriter'
// import ScrollTrigger from 'react-scroll-trigger';

const Study = ({heading}) => {
  // const [typing,setTyping]= useState(false)
  return (
    <>
      <h5 style={{position:'relative', top: "3rem" , height: '5rem', marginTop:"-2rem"}}>
      {/* <ScrollTrigger onEnter={()=> setTyping(true)} onExit={()=> setTyping(false)}> */}
          {/* {typing &&  */}
          <Typewriter
        words={[`${heading}`]}
        loop={Infinity}  />
        {/* } */}
        {/* </ScrollTrigger> */}
      </h5>
      <div className="studies-section">
        {Studies.map(({ img, title, demo, name, desc }) => {
          return (
            <div key={title} className="projects_section">
              <div className="project_img">
                <a href={demo} target='_blank' rel='noreferrer'>
                  <img src={img} alt={name} className="imgcls" />
                </a>
              </div>
              <div className="project_details">
                <h4>{title}</h4>
                <p>{desc}</p>
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="project_btn btn">View Project</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Study