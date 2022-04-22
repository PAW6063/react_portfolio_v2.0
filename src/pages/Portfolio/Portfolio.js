import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Portfolio.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import projectList from "../../utils/ProjectList.js";
import Projects from "../../components/Projects/Projects.js";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="portfolio-header">{"<Portfolio/>"}</h1>
      <div className="github-link-container">
        <hr className="lines" />
        <Link
          to={{ pathname: "https://github.com/PAW6063" }}
          target="_blank"
          className="github-link"
        >
          <FontAwesomeIcon icon={faGithub} className="github-icon" /> Github
        </Link>
        <hr className="lines" />
      </div>
      <div className="project-list">
        {projectList.map((project, index) => {
          return <Projects key={index} project={project} />;
        })}
      </div>
    </div>
  );
}
