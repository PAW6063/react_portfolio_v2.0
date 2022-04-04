import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from "../../logo.png";
import "./Portfolio.css";

import Projects from "../../components/Projects/Projects.js";

export default function Portfolio() {
  return (
    <div className="portfolio">
        <h1>{"<Portfolio/>"}</h1>
        <hr></hr>
        <button>
            <i></i>
        </button>
        <hr></hr>

        {/* {projectList.map((project, index) => {
        return <Project key={index} project={project}/>
      })} */}

    </div>
  );
}
