import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faArrowDownToBracket,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   faLinkedin,
//   faLinkedinIn,
//   faGithub,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";

import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <h1 className="resume-header">{"<Resumé/>"}</h1>

      <h3 className="resume-sub-header">Hiring?? Here's my resumé!</h3>
      <div className="resume-resume">
        <p className="resume-p">Resumé</p>
        <button className="resume-download">
          <FontAwesomeIcon icon={faDownload} className="resume-icon" />
        </button>
      </div>

      <h2 className="resume-header">Technologies</h2>
      <ul className="resume-list">
        <li className="resume-list-item">React.js</li>
        <li className="resume-list-item">HTML</li>
        <li className="resume-list-item">CSS</li>
        <li className="resume-list-item">Javascript</li>
        <li className="resume-list-item">Bootstrap</li>
        <li className="resume-list-item">Node.js</li>
        <li className="resume-list-item">Express.js</li>
        <li className="resume-list-item">MongoDB</li>
        <li className="resume-list-item">GraphQL</li>
        <li className="resume-list-item">mySQL</li>
        <li className="resume-list-item">C</li>
        <li className="resume-list-item">C++</li>
      </ul>
    </div>
  );
}
