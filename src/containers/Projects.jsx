import React from 'react';
import Slide from 'react-reveal/Slide'
import ProjectCard from '../components/ProjectCard'
import Fotoset from '../images/fotoset.png'
import Travelatr from '../images/travelatr.png'
import QuickPix from '../images/quickpix.png'
import SpaceBuddies from '../images/spacebuddies.png'
import Portfolio from '../images/portfolio.png'
import DisneyPlusClone from '../images/disneyclone.png'
import AmazonClone from '../images/amazonclone.png'

const Projects = ({ toggle }) => {
    return (
    <div id="projects" className={toggle ? "projectspage darkmode" : "projectspage"}>
            <Slide left duration={800}>
                <h1>TECHNICAL PROJECTS</h1>
            </Slide>
        <div className="projectscontainer">
                <ProjectCard 
                    name={"Fotoset"}
                    image={Fotoset}
                    tags={["React", "Redux", "Rails", "PostgreSQL", "JWT", "HTML", "CSS", "Maps JavaScript API", "Places API", "Geocoding API", "Yahoo Weather API", "EmailJS"]}
                    description={"A photo sharing application with camera setting information, include map search, and weather search."}
                    frontend="https://github.com/yushi1007/Fotoset-Frontend"
                    backend="https://github.com/yushi1007/Fotoset-Backend"
                    live="https://fotoset.netlify.app/"
                    video="https://www.loom.com/share/4af16cfc047e43129db5cc362968db6a"
                    repo=""
                    toggle={toggle}
                />
                <ProjectCard 
                    name={"Travelatr"}
                    image={Travelatr}
                    tags={["React", "Rails", "PostgreSQL", "JWT", "HTML", "CSS", "Places API", "Skyscanner API"]}
                    description={"A travel information website provides latest travel destination recommendations, including facts, and flights search."}
                    frontend="https://github.com/yushi1007/Travelatr-Frontend"
                    backend="https://github.com/jpham1109/Travelatr-Backend"
                    live="https://travelatr.netlify.app/"
                    video="https://www.loom.com/share/d988149f565c404bbc4f93fae8b5c976"
                    repo=""
                    toggle={toggle}
                />
                <ProjectCard 
                    name={"QuickPix"}
                    image={QuickPix}
                    tags={["Rails", "PostgreSQL", "HTML", "CSS", "Bcrypt"]}
                    description={"A photography e-commerce website that allows users place order and sell their own print."}
                    frontend="https://github.com/yushi1007/QuickPix/tree/main/app/views"
                    backend="https://github.com/yushi1007/QuickPix"
                    live="https://quickpix-yd.herokuapp.com/"
                    video="https://www.loom.com/share/bb90c26da6fc4cf294de2159e2173dce"
                    repo=""
                    toggle={toggle}
                />
                <ProjectCard 
                    name={"Amazon Clone"}
                    image={AmazonClone}
                    tags={["React", "React Context API", "Firebase", "Stripe", "Material-UI", "HTML", "CSS"]}
                    description={"This is an Amazon Clone that implemented the Stripe payment processor."}
                    frontend="https://github.com/yushi1007/Amazon-Clone/tree/main/src"
                    backend="https://github.com/yushi1007/Amazon-Clone/tree/main/functions"
                    live="https://e-commerce-store-app.web.app/"
                    video="https://youtu.be/W37dflBSDGs"
                    repo=""
                    toggle={toggle}
                />
                <ProjectCard 
                    name={"Disney+ Clone"}
                    image={DisneyPlusClone}
                    tags={["React", "Redux", "Firebase", "Styled-Components", "HTML", "CSS"]}
                    description={"This is a Disney+ Clone that allows user to sign in with Google account and see all the movies' details."}
                    frontend="https://github.com/yushi1007/Disney-Plus-Clone"
                    backend="https://github.com/yushi1007/Disney-Plus-Clone/blob/main/src/firebase.js"
                    live="https://disney-plus-clone-app-e706d.web.app/"
                    video="https://youtu.be/BqYtAKUvWoI"
                    repo=""
                    toggle={toggle}
                    />
                <ProjectCard 
                    name={"Space Buddies"}
                    image={SpaceBuddies}
                    tags={["Ruby", "SQLite3"]}
                    description={"The encylopedia for space pets! A Ruby CLI application that allows user to sign in or sign up and meet some intergalactic friends!"}
                    frontend=""
                    backend=""
                    live=""
                    video=""
                    repo="https://github.com/sssandraa/project-1"
                    toggle={toggle}
                />
                <ProjectCard 
                    name={"Portfolio Website"}
                    image={Portfolio}
                    tags={["React", "HTML", "CSS", "EmailJS"]}
                    description={"This is my portfolio website. Built with React and Vanilla CSS."}
                    frontend=""
                    backend=""
                    live="https://www.yushi.dev/"
                    video=""
                    repo="https://github.com/yushi1007/portfolio-website"
                    toggle={toggle}
                />
        </div>
    </div>
    )
}

export default Projects;