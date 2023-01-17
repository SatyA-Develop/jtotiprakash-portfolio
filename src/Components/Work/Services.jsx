import React, {useState} from 'react'
import Service from './Service'
import { Typewriter } from 'react-simple-typewriter'
import ScrollTrigger from 'react-scroll-trigger';

const Services = ({heading}) => {
  const [typing,setTyping]= useState(false)
  return (
    <>
      <h5 style={{marginTop: "4rem"}}>
        <ScrollTrigger onEnter={()=> setTyping(true)} onExit={()=> setTyping(false)}>
          {typing && <Typewriter
        words={[`${heading}`]}
        loop={1}  />
        }
        </ScrollTrigger>
        
      </h5>
      <div className="service-section">
         {
            Service.map(({icon, titl})=>{
              return(
                <div key={titl} className="service-page">
                   <img src={icon} alt="icon" />
                   <div className="serv-title">{titl}</div>
                </div>
              )
            })
         }
      </div>
    </>
  )
}

export default Services
