import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload /* , 
  faArrowDownToBracket, */,
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
      <h1 className="main-header">{"<Resumé/>"}</h1>

      <h3 className="resume-sub-header">Hiring?? Here's my resumé!</h3>
      <div className="resume-resume">
        <h4 className="resume-h4">Resumé</h4>
      <a
          className="resume-download"
          href="./assets/resume/PhillipWelch.pdf"
          download="Phillip_Welch.pdf"
        >
          <FontAwesomeIcon icon={faDownload} className="resume-icon" />
        </a>
      </div>

      <h2 className="resume-header">Technologies</h2>
      <ul className="resume-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>C++/C</li>
        <li>Python</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Bootstrap</li>
        <li>GraphQL</li>
        <li>mySQL</li>
      </ul>
    </div>
  );
}
