import React, { useState } from 'react';
import { Link } from "react-scroll"
import Logo from '../images/mylogo.png';
import Resume from '../resume/resume.pdf'
import Bounce from 'react-reveal/Bounce';

const Navbar = () => {

    

    return(
        <div id="navbar" className="navbar-box">
            <div className="navbar">
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
                    </ul>
            </Bounce>
            </div>
        </div>
    )
} 

export default Navbar;