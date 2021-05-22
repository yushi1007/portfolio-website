import React from 'react';
import Resume from '../resume/resume.pdf'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

const About = () => {
    return(
    <div id="about" class="section section-summary js--section-summary">
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
            </p>
        </Fade>
        </div>
        <Fade bottom duration={1000} delay={300} cascade>
            <div className="icon">
                <ul>
                    <li><a className="linkedin" href="https://www.linkedin.com/in/yushi95"><i className="fab fa-linkedin"></i></a></li>
                    <li><a className="instagram" href="https://www.instagram.com/yushi.95"><i className="fab fa-instagram"></i></a></li>
                    <li><a className="medium" href="https://yushi95.medium.com/"><i className="fab fa-medium-m"></i></a></li>
                    <li><a className="github" href="https://github.com/yushi1007"><i className="fab fa-github"></i></a></li>
                </ul>
            </div>
        </Fade>
        <Fade bottom duration={1000} delay={300} cascade>
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