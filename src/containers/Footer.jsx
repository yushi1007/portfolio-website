import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return(
        <div id="footer">
            <Fade bottom duration={600} delay={200}>
                <p>Designed and Created by Yu Shi </p>
                <p>Built with React + Vanilla CSS </p>
                <p><a className="portfolio-repo" href="https://github.com/yushi1007/portfolio-website" target="_blank" rel="noreferrer">View Source Code</a></p>
                <p className="email"><a href="mailto:yushiys95@gmail.com" rel="noreferrer">yushiys95@gmail.com</a></p>
            </Fade>
            <Bounce bottom cascade duration={800}>
            <ul className="footer-icon">
                <li><a href="https://www.linkedin.com/in/yushi95" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/yushi.95" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://yushi95.medium.com/" target="_blank" rel="noreferrer"><i className="fab fa-medium-m"></i></a></li>
                <li><a href="https://github.com/yushi1007" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
            </ul>
            </Bounce>
        </div>
    )
} 

export default Footer;