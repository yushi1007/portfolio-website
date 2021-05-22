import React from 'react';
import Fade from 'react-reveal/Fade';

const SkillCard = ({ icon, title, description }) => {
    return (
    <Fade bottom duration={1000} delay={200}>
        <div className="skill-card">
            <div className="skill-card-header">
                <img src={icon} alt="html-logo"/>
            </div>
            <div className="skill-card-body">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </Fade>
    )
}

export default SkillCard;

// HTML: I am very comfortable writing HTML elements in Javascript and place them in the DOM. I will continue improving my use of HTML semantic tag. 