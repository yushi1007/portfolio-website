import React from 'react';
import { Link } from "react-scroll"
import Logo from '../images/mylogo.png';
import Resume from '../resume/resume.pdf'

const Navbar = () => {
    return(
        <div id="navbar" className="navbar">
            <img src={Logo} alt="logo"/>
            <div className="nav">
                <ul>
                    <li><Link to="home" activeClass="active" spy={true} smooth={true} duration={700}>Home</Link></li>
                    <li><Link to="about" activeClass="active" spy={true} smooth={true} duration={700}>About</Link></li>
                    <li><Link to="skills" activeClass="active" spy={true} smooth={true} duration={700}>Skills</Link></li>
                    <li><Link to="projects" activeClass="active" spy={true} smooth={true} duration={700}>Projects</Link></li>
                    <li><Link to="blogs" activeClass="active" spy={true} smooth={true} duration={700}>Blogs</Link></li>
                    <li><Link to="contact" activeClass="active" spy={true} smooth={true} duration={700}>Contact</Link></li>
                    <li><a href={Resume} target="_blank" rel="noreferrer">View Resume</a></li>
                </ul>
            </div>
        </div>
    )
} 

export default Navbar;