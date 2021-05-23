import React from 'react';
import Slide from 'react-reveal/Slide'
import ProjectCard from '../components/ProjectCard'
import Fotoset from '../images/fotoset.png'
import Travelatr from '../images/travelatr.png'
import QuickPix from '../images/quickpix.png'
import SpaceBuddies from '../images/spacebuddies.png'

const Projects = () => {
    return (
    <div id="projects" className="section projectspage">
            <Slide left duration={800}>
                <h1>TECHNICAL PROJECTS</h1>
            </Slide>
        <div className="projectscontainer">
                <ProjectCard 
                    name={"Fotoset"}
                    image={Fotoset}
                    tags={["React", "Redux", "Rails", "PostgreSQL", "HTML", "CSS"]}
                    description={"A photo sharing application with camera setting information, include map search, and weather search."}
                    frontend="https://github.com/yushi1007/Fotoset-Frontend"
                    backend="https://github.com/yushi1007/Fotoset-Backend"
                    live="https://fotoset.netlify.app/"
                    video="https://www.loom.com/share/4af16cfc047e43129db5cc362968db6a"
                />
                <ProjectCard 
                    name={"Travelatr"}
                    image={Travelatr}
                    tags={["React", "Rails", "PostgreSQL", "HTML", "CSS"]}
                    description={"A travel information website provides latest travel destination recommendations, including facts, and flights search."}
                    frontend="https://github.com/yushi1007/Fotoset-Frontend"
                    backend="https://github.com/yushi1007/Fotoset-Backend"
                    live="https://fotoset.netlify.app/"
                    video="https://www.loom.com/share/4af16cfc047e43129db5cc362968db6a"
                />
                <ProjectCard 
                    name={"QuickPix"}
                    image={QuickPix}
                    tags={["React", "Redux", "Rails", "PostgreSQL", "HTML", "CSS"]}
                    description={"A photography e-commerce website that allows users place order and sell their own print."}
                    frontend="https://github.com/yushi1007/Fotoset-Frontend"
                    backend="https://github.com/yushi1007/Fotoset-Backend"
                    live="https://fotoset.netlify.app/"
                    video="https://www.loom.com/share/4af16cfc047e43129db5cc362968db6a"
                />
                <ProjectCard 
                    name={"Space Buddies"}
                    image={SpaceBuddies}
                    tags={["React", "Redux", "Rails", "PostgreSQL", "HTML", "CSS"]}
                    description={"A photo sharing application with camera setting information, include map search, and weather search."}
                    frontend="https://github.com/yushi1007/Fotoset-Frontend"
                    backend="https://github.com/yushi1007/Fotoset-Backend"
                    live="https://fotoset.netlify.app/"
                    video="https://www.loom.com/share/4af16cfc047e43129db5cc362968db6a"
                />
                <ProjectCard 
                    name={"Fotoset"}
                    image={Fotoset}
                    tags={["React", "Redux", "Rails", "PostgreSQL", "HTML", "CSS"]}
                    description={"A photo sharing application with camera setting information, include map search, and weather search."}
                    frontend="https://github.com/yushi1007/Fotoset-Frontend"
                    backend="https://github.com/yushi1007/Fotoset-Backend"
                    live="https://fotoset.netlify.app/"
                    video="https://www.loom.com/share/4af16cfc047e43129db5cc362968db6a"
                />
        </div>
    </div>
    )
}

export default Projects;