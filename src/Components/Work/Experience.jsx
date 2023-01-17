import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Experience = () => {
  const [countUp,setCountUp]= useState(false)
  return (
    <>
      <div className="experience-section">
        <div className="client">
        <ScrollTrigger onEnter={()=> setCountUp(true)} onExit={()=> setCountUp(false)}>
          {countUp && <CountUp start={0} end={50} delay={0} duration={2} />}+
        </ScrollTrigger>
            <span>Clients</span>
        </div>
        <div className="year">
        <ScrollTrigger onEnter={()=> setCountUp(true)} onExit={()=> setCountUp(false)}>
          {countUp && <CountUp start={0} end={2} delay={0} duration={2} />}+
        </ScrollTrigger>
            <span>Years Experience</span>
        </div>
        <div className="projects">
        <ScrollTrigger onEnter={()=> setCountUp(true)} onExit={()=> setCountUp(false)}>
          {countUp && <CountUp start={0} end={85} delay={0} duration={2} />}+
        </ScrollTrigger>
            <span>Projects</span>
        </div>
      </div>
    </>
  )
}

export default Experience
