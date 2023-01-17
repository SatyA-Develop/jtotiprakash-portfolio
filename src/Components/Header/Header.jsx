import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  
    
  return (
    <nav>
      <div className="logo">
      <NavLink to="/" style={{color: "#0f9ee6"}}>JPS</NavLink>
         </div>
      <ul className="nav_list">
        <li>
          <NavLink to="/" className="navlist-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className="navlist-link">
            My Work
          </NavLink>
        </li>
      </ul>
      <a href="mailto:jyotiprakashsahoo830@gmail.com" target='_blank' rel="noreferrer"  >
        <button className="btn">Say Hi!</button>
      </a>
    </nav>
  );
};

export default Header;