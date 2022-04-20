import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Portfolio.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import projectList from ;
import Projects from "../../components/Projects/Projects.js";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="portfolio-header">{"<Portfolio/>"}</h1>
      <div className="github-link-container">
        <hr className="lines" />
        <Link className="github-link" to="">
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
           {" "}Github
        </Link>
        <hr className="lines" />
      </div>
      <div className="project-list">
        {/* {projectList.map((project, index) => {
          return <Projects key={index} project={project} />;
        })} */}
        <div className="project">
            <Link className="project-link">
                <img className="project-image"/>
                <h1 className="project-name"></h1>
            </Link>
        </div>
      </div>
    </div>
  );
}
