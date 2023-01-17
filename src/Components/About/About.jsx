import React from 'react'
import './About.css'
import IMG from '../../assests/ui-ux-designer.gif'
import IMG1 from '../../assests/round.png'
import { NavLink } from 'react-router-dom'
import LinkedIn from '../../assests/linkedin.svg'
import Email from '../../assests/gmail.svg'
import Behance from '../../assests/behance.svg'
import Dribble from '../../assests/dribble.svg'
import { Helmet } from 'react-helmet';

const About = () => {
  return (

    <div className='section about-section'>
      <Helmet>
        <title>Jyotiprakash Sahoo</title>
      </Helmet>
      <div className="about-data">
        <img src={IMG1} alt="" className='rotate' />
        <div className="circle"></div>
        <h3 className="hello">
          Hello, <span>I'm</span>
        </h3>
        <h1 className="heading">Jyotiprakash Sahoo</h1>
        <p className="para">
        I'm a Product Design expert with proven experience conceptualizing and
          designing new, engaging products and software. I quickly understand
          and translate business objectives into user-centered designs that also
          accomplish business objectives. I use my strong strategic, analytical,
          and creative skillsets to maximize product adoption, engagement, and
          growth.          
        </p>
        <div className="socials">
          <div className="social-icons">
          <a href="https://www.linkedin.com/in/jyotiprakash-sahoo-a22274214/" target='_blank' rel="noreferrer"><img src={LinkedIn} alt="" className='social_icon'  /></a>
          <a href="mailto:jyotiprakashsahoo830@gmail.com" target='_blank' rel="noreferrer"><img src={Email} alt="" className='social_icon'  /></a>
          <a href="https://www.behance.net/jyotiprakash8984" target='_blank' rel="noreferrer"><img src={Behance} alt="" className='social_icon'  /></a>
          <a href="https://dribbble.com/jyotiprakash20" target='_blank' rel="noreferrer"><img src={Dribble} alt="" className='social_icon'  /></a>
          </div>
            <NavLink to='/work'><button className='btn abt-btn'>View Work</button></NavLink>
        </div>
      </div>
      <div className="about-img">
          <img style={{width:'100%', marginTop:'2rem'}} src={IMG} alt='ux ui designer vdo' autoPlay loop muted className='about_imgg'/>
      </div>
    </div>
  )
}

export default About
