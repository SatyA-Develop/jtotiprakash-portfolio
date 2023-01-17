import React,{useState} from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Shot from './Shot' 
import ScrollTrigger from 'react-scroll-trigger';

const Shots = ({heading}) => {
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
      <div className="shot-section">
        {
            Shot.map(({img, link})=>{
                return(
                    <div key={img} className="shot-img">
                        <a href={link}  target="_blank" without rel="noreferrer">
                          <img src={img} alt="ui shot" className='uishot_img' />
                          </a>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Shots
