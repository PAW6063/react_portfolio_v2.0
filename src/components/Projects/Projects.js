import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Projects.css";

export default function Projects() {
    return (
        <div className="project">
            <Link className="project-link">
                <img className="project-image"/>
                <h1 className="project-name"></h1>
            </Link>
        </div>
    );
}