import React, { useState } from 'react';
import { Link } from "react-scroll"
import Logo from '../images/mylogo.png';
import Resume from '../resume/resume.pdf'
import Bounce from 'react-reveal/Bounce';
import ModeButton from '../components/ModeButton';

const Navbar = ({ toggle, handleClick, open, handleNavbarClick}) => {

    return(
        <div id="navbar" className="navbar-box">
            <div id={toggle ? "darkmode" : ""} className={open ? "navbar active" : "navbar"}>
            <Bounce right cascade duration={800}>
                    <ul className="navlink">
                        <li><Link to="about" activeClass="active" spy={true} smooth={true} duration={700}><img src={Logo} alt="logo"/></Link></li>
                        <li><Link to="home" activeClass="active" spy={true} smooth={true} duration={700}>Home</Link></li>
                        <li><Link to="about" activeClass="active" spy={true} smooth={true} duration={700}>About</Link></li>
                        <li><Link to="skills" activeClass="active" spy={true} smooth={true} duration={700}>Skills</Link></li>
                        <li><Link to="projects" activeClass="active" spy={true} smooth={true} duration={700}>Projects</Link></li>
                        <li><Link to="blogs" activeClass="active" spy={true} smooth={true} duration={700}>Blogs</Link></li>
                        <li><a href={Resume} target="_blank" rel="noreferrer">Resume</a></li>
                        <li><Link to="contact" activeClass="active" spy={true} smooth={true} duration={700}><button className="navbar-btn">Contact</button></Link></li>
                        <li><span id="modebutton"><ModeButton toggle={toggle} handleClick={handleClick}/></span></li>
                    </ul>
            </Bounce>
            <div className={open ? "hamburger active" : "hamburger"} onClick={handleNavbarClick}>
                <li className="line"></li>
                <li className="line"></li>
                <li className="line"></li>
            </div>
            </div>
        </div>
    )
} 

export default Navbar;