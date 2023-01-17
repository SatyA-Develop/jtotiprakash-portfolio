import React from "react";
import { Helmet } from "react-helmet";
import "./Work.css";
import Study from "./Study";
import Shots from "./Shots";
import { NavLink } from "react-router-dom";
import Services from "./Services";
import Experience from "./Experience";
import Contact from "./Contact"; 
import backbtn from '../../assests/backbtn.svg'
import chat from '../../assests/Chat.svg'

const Work = () => {
  return (
    <div className="work-section">
      <Helmet>
        <title>Work | Jyotiprakash Sahoo</title>
      </Helmet>
      <NavLink to="/">
        <img className="go-back" src={backbtn} alt='Go Gack' />
      </NavLink>
      <Study heading="My Recent Case Studies" />
      <Shots heading='UI Shots' />
      <Services heading='Services'/>
      <Experience/>
      <a href="mailto:jyotiprakashsahoo830@gmail.com" target='_blank' rel="noreferrer"><img src={chat} alt='chat' className="chat-icon" /></a>
      <Contact/>
    </div>
  );
};

export default Work;
