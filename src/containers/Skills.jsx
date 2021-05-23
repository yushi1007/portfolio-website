import React from 'react';
import Css from '../svg/css.svg'
import Html from '../svg/html.svg'
import Git from '../images/git.png'
import Rails from '../images/rails.png'
import Redux from '../images/redux.png'
import ReactLogo from '../images/react.png'
import JavaScript from '../images/javascript.png'
import PostgreSQL from '../images/postgresql.png'
import Adobe from '../images/adobecreativecloud.png'
import SkillCard from '../components/SkillCard';
import Slide from 'react-reveal/Slide'

const Skills = () => {
    return (
    <div id="skills" className="section skillspage">
            <Slide left duration={800}>
                <h1>TECHNICAL SKILLS</h1>
            </Slide>
        <div className="skillscontainer">
            <SkillCard 
                icon={Html}
                title={"HTML"}
                description={"I am very comfortable writing HTML elements in Javascript and place them in the DOM. I will continue improving my use of HTML semantic tag."}
            />
            <SkillCard 
                icon={Css}
                title={"CSS"}
                description={"Love it. I write custom CSS for my project to control the look and feel of the content written in HTML. I enjoy the entire process."}
            />
            <SkillCard 
                icon={JavaScript}
                title={"JavaScript"}
                description={"Most frequently used programming language to make HTML pages more dynamic and interactive."}
            />
            <SkillCard 
                icon={ReactLogo}
                title={"React"}
                description={"I use React for frontend web-development. It allow us to create reusable UI components"}
            />
             <SkillCard 
                icon={Redux}
                title={"Redux"}
                description={"I use redux to manage application's state."}
            />
              <SkillCard 
                icon={Rails}
                title={"Ruby on Rails"}
                description={"I use Ruby on Rails for developing database-backed web application."}
            />
               <SkillCard 
                icon={PostgreSQL}
                title={"PostgreSQL"}
                description={"PostgreSQL help me to protect data integrity and manage my data no matter how big or small the dataset."}
            />
                <SkillCard 
                icon={Git}
                title={"Git"}
                description={"Most frequently used version control system. Worked on a variety of collaborative projects that utilized Git workflow."}
            />
               <SkillCard 
                icon={Adobe}
                title={"Creative Cloud"}
                description={"I use Adobe Creative Cloud software for logo design, photo editing and web development. I want to continue improving my skills that can enable me to be more creative and be able to build visually appealing websites."}
            />
        </div>
    </div>
    )
}

export default Skills;