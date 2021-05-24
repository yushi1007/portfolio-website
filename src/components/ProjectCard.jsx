import React from 'react';
import Fade from 'react-reveal/Fade';
import Tag from './Tag';

const ProjectCard = ({ image, name, description, tags, frontend, backend, live, video, repo }) => {

    const ProjectTags = tags.map((tag, index) => {
        return (
            <Tag 
            key={index}
            tag={tag}
            />
        )
    })

    const checkLink = (link) => {
        if(link.length>0){
            return true
        }else{
            return false
        }
    }

    return (
    <Fade bottom duration={1000} delay={200}>
        <div className="project-card">
                <div className="project-img">
                    <img src={image} alt="project img"/>
                </div>
            <div className="project-content">
                <div className="links">
                    { checkLink(frontend) ? <a href={frontend} target="_blank" rel="noreferrer">
                    <i className="fab fa-github-alt"></i>
                        <b>Frontend</b></a>:null}
                    { checkLink(backend) ? <a href={backend} target="_blank" rel="noreferrer">
                    <i className="fab fa-github-alt"></i>
                        <b>Backend</b></a>:null}
                    { checkLink(live) ? <a href={live} target="_blank" rel="noreferrer">
                    <i className="fas fa-desktop"></i>
                        <b>Live</b></a>:null}
                    { checkLink(video) ? <a href={video} target="_blank" rel="noreferrer">
                    <i className="fas fa-video"></i>
                        <b>Video</b></a>:null}
                    { checkLink(repo) ? <a href={repo} target="_blank" rel="noreferrer">
                    <i className="fab fa-github-alt"></i>
                        <b>Repo</b></a>:null}
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