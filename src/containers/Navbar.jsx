import React from 'react';
import { Link } from "react-scroll"
import Logo from '../images/mylogo.png';
import Resume from '../resume/resume.pdf'

const Navbar = () => {
    return(
        <div id="navbar" className="navbar">
            <img src={Logo} alt="logo"/>
            <h3>YU SHI</h3>
            <div className="nav">
                <ul className="navlink">
                    <li><Link to="home" activeClass="active" spy={true} smooth={true} duration={700}>Home</Link></li>
                    <li><Link to="about" activeClass="active" spy={true} smooth={true} duration={700}>About</Link></li>
                    <li><Link to="skills" activeClass="active" spy={true} smooth={true} duration={700}>Skills</Link></li>
                    <li><Link to="projects" activeClass="active" spy={true} smooth={true} duration={700}>Projects</Link></li>
                    <li><Link to="blogs" activeClass="active" spy={true} smooth={true} duration={700}>Blogs</Link></li>
                    <li><a href={Resume} target="_blank" rel="noreferrer">Resume</a></li>
                    <li><Link to="contact" activeClass="active" spy={true} smooth={true} duration={700}><button className="contact-btn">Contact</button></Link></li>
                </ul>
            </div>
        </div>
    )
} 

export default Navbar;