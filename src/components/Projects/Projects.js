import React from "react";
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import "./Projects.css";

function Modal({ project, displayState}) {
  return (
    <div className="modal" style={{'display': displayState}}>
      <div className="modal-content flex-column">
        <div className="carousel">
            <img src={project.image} className="modal-img"/>
        </div>
        <div className="modal-info flex-column">
          <h1 className="modal-title">{project.title}</h1>
          <ul className="modal-links">
            <Link
              to={{ pathname: project.github }}
              target="_blank"
              className="modal-link"
            >
              <li className="modal-item">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="modal-icon"
                />
              </li>
            </Link>
            <Link
              to={{ pathname: project.deployed }}
              target="_blank"
              className="modal-link"
            >
              <li className="modal-item">
                <FontAwesomeIcon
                  icon={faRocket}
                  className="modal-icon"
                />
              </li>
            </Link>
          </ul>
          <div className="modal-context flex-column">
              <h2 className="modal-subheader">Description</h2>
              <p className="description">{project.description}</p>
              <ul className="tech-stack flex-column">
              {project.tech.map((tech, index) => {
                return <li key={index} className="tech-item">{tech}</li>;
                })}
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ project }) {
    const [ displayState, setDisplayState ] = useState("none");
  
    return (
    <div className="project" onClick={(event) => {
        if(displayState === "none"){
            setDisplayState("block");
        } else {
            setDisplayState("none");
        }
    }}>
      <img
        className="project-image"
        src={project.image}
        alt={"Image of " + project.title + " project."}
      />
      <h1 className="project-title">{project.title}</h1>
      <Modal project={project} displayState={displayState} />
    </div>
  );
}
