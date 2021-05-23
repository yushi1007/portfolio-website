import React from 'react';
import Fade from 'react-reveal/Fade';
import Tag from './Tag';

const ProjectCard = ({ image, name, description, tags, frontend, backend, live, video }) => {

    const ProjectTags = tags.map((tag, index) => {
        return (
            <Tag 
            key={index}
            tag={tag}
            />
        )
    })

    return (
    <Fade bottom duration={1000} delay={200}>
        <div className="project-card">
                <div className="project-img">
                    <img src={image} alt="project img"/>
                </div>
            <div className="project-content">
                <div className="links">
                    <a href={frontend} target="_blank" rel="noreferrer"><b>Frontend</b></a>
                    <a href={backend} target="_blank" rel="noreferrer"><b>Backend</b></a>
                    <a href={live} target="_blank" rel="noreferrer"><b>Live</b></a>
                    <a href={video} target="_blank" rel="noreferrer"><b>Video</b></a>
                </div>
                <div className="project-details">
                    <h2>{name}</h2>
                    <hr></hr>
                    <div className="tags">
                        {ProjectTags}
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </Fade>
    )
}

export default ProjectCard;