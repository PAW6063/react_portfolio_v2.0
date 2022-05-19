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
        <p className="resume-p">Resumé</p>
      <a
          className="resume-download"
          href="./assets/resume/PhillipWelch.pdf"
          download="PhillipWelch.pdf"
        >
          <FontAwesomeIcon icon={faDownload} className="resume-icon" />
        </a>
      </div>

      <h2 className="resume-header">Technologies</h2>
      <table className="resume-table">
        <thead className="resume-thead">
          <th className="resume-cells">Languages</th>
          <th className="resume-cells">Front-End</th>
          <th className="resume-cells">Back-End</th>
        </thead>
        <tbody className="resume-tbody">
          <tr className="resume-rows">
            <td className="resume-cells">HTML</td>
            <td className="resume-cells">React.js</td>
            <td className="resume-cells">Node.js</td>
          </tr>
          <tr className="resume-rows">
            <td className="resume-cells">CSS</td>
            <td className="resume-cells">Bootstrap</td>
            <td className="resume-cells">Express.js</td>
          </tr>
          <tr className="resume-rows">
            <td className="resume-cells">JavaScript</td>
            <td className="resume-cells"></td>
            <td className="resume-cells">MongoDB</td>
          </tr>
          <tr className="resume-rows">
            <td className="resume-cells">Python</td>
            <td className="resume-cells"></td>
            <td className="resume-cells">GraphQL</td>
          </tr>
          <tr className="resume-rows">
            <td className="resume-cells">C++</td>
            <td className="resume-cells"></td>
            <td className="resume-cells">mySQL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
