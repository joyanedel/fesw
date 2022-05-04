import './styles/Card.css';
import React from 'react';

function ProjectDetailCard(props) {
    var project = props.project[0]
    return (
        <div className="project-card">
            <div className="project-title">
                <h1>{project.name}</h1>
            </div>
            <div className="project-text">
                <h3> Sobre el Proyecto </h3>
                <br></br>
                <p>{project.detail}</p>
            </div>
            <div className="project-title">
                <p align="center">
                    <iframe title={project.yt_link_frame} width="500" height="300" src={project.yt_link_frame} ></iframe>
                </p>
            </div>
            <div className="project-img-container">
                <div className="project-img">
                    <img src={project.team_img} alt=""/>
                </div>
                <div className="project-img">
                    <img src={project.project_img} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetailCard;