import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Projects.css";

export default function Projects({project}) {
    return (
        <div className="project">
            <img className="project-image" src={project.image} alt={"Image of " + project.title + " project."}/>
            <h1 className="project-title">{project.title}</h1>
        </div>
    );
}