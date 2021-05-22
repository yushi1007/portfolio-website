import React from 'react';
import Css from '../svg/css.svg'
import Html from '../svg/html.svg'
import Rails from '../images/rails.png'
import Redux from '../images/redux.png'
import ReactLogo from '../images/react.png'
import JavaScript from '../images/javascript.png'
import PostgreSQL from '../images/postgresql.png'
import Slide from 'react-reveal/Slide'
import SkillCard from '../components/SkillCard';

const Skills = () => {
    return (
    <div id="skills" className="section skillspage">
        <div className="skillscontainer">
            <Slide left duration={800}>
                <h1>TECHNICAL SKILLS</h1>
            </Slide>
            <SkillCard 
                icon={Html}
                title={"HTML"}
                description={"I am very comfortable writing HTML elements in Javascript and place them in the DOM. I will continue improving my use of HTML semantic tag."}
            />
            <SkillCard 
                icon={Css}
                title={"CSS"}
                description={"I am very comfortable writing HTML elements in Javascript and place them in the DOM. I will continue improving my use of HTML semantic tag."}
            />
            <SkillCard 
                icon={JavaScript}
                title={"JavaScript"}
                description={"I am very comfortable writing HTML elements in Javascript and place them in the DOM. I will continue improving my use of HTML semantic tag."}
            />
            <SkillCard 
                icon={ReactLogo}
                title={"React"}
                description={"I am very comfortable writing HTML elements in Javascript and place them in the DOM. I will continue improving my use of HTML semantic tag."}
            />
             <SkillCard 
                icon={Redux}
                title={"Redux"}
                description={"I am very comfortable writing HTML elements in Javascript and place them in the DOM. I will continue improving my use of HTML semantic tag."}
            />
              <SkillCard 
                icon={Rails}
                title={"Ruby on Rails"}
                description={"I am very comfortable writing HTML elements in Javascript and place them in the DOM. I will continue improving my use of HTML semantic tag."}
            />
               <SkillCard 
                icon={PostgreSQL}
                title={"PostgreSQL"}
                description={"I am very comfortable writing HTML elements in Javascript and place them in the DOM. I will continue improving my use of HTML semantic tag."}
            />
        </div>
    </div>
    )
}

export default Skills;