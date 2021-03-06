import React from 'react';
import Resume from '../resume/resume.pdf'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

const About = ({ toggle }) => {
    return(
    <div id="about" className={toggle ? "aboutpage darkmode" : "aboutpage"}>
        <ul className={toggle ? "about-background darkmode" : "about-background"}>
            <li className="blue"></li>
            <li className="yellow"></li>
            <li className="red"></li>
        </ul>
        <div className="row about">
            <Slide left duration={800}>
                <h1>ABOUT ME</h1>
            </Slide>
            <Fade bottom duration={1000} delay={150}>
                <p className="summary">
                    <strong>Hi there! my name is Yu Shi, a Software Engineer with experience building full stack applications with JavaScript, React, and Ruby on Rails.</strong> Possess strong skills in designing, developing and testing multiple web-based applications. Data driven and creative in finding solutions to complex problems. Love to develop innovative applications that enable creativity.
                </p><br/>
            </Fade>
            <Fade bottom duration={1000} delay={300}>
                <p className="summary">
                    I love the entire process of developing creative websites. It allows me to create something both beautiful and functional. I want to continue improving my skills that can enable me to be more creative and be able to build visually appealing websites.
                </p><br/>
            </Fade>
            <Fade bottom duration={1000} delay={300}>
                <p className="summary">
                    In 2015, I've gotten into photography. In my free time, I enjoy exploring the different places in the world and going out to take photos. I love the challenge of finding caches and spending time to meet new people. Learning how people hide things and where people are likely to look.
                </p>
            </Fade>
        </div>
        <Fade bottom duration={1000} delay={600} cascade>
            <div className="icons">
                <ul className="iconlist">
                    <li><a href="https://www.linkedin.com/in/yushi95" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/yushi.95" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://yushi95.medium.com/" target="_blank" rel="noreferrer"><i className="fab fa-medium-m"></i></a></li>
                    <li><a href="https://github.com/yushi1007" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                </ul>
            </div>
        </Fade>
        <Fade bottom duration={1000} delay={750} cascade>
            <div className="resumelink">
                <div>
                  <a href={Resume} target="_blank" rel="noreferrer">View Resume</a>
                </div>
            </div>
        </Fade>
    </div>
    )
} 

export default About;