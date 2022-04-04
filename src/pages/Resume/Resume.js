import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from "../../logo.png";
import "./Resume.css";



export default function Resume() {
  return (
    <div className="resume">
        <h1>{"<Resumé/>"}</h1>

        <h3>Hiring?? Here's my resumé!</h3>
        <a>
            <i></i>
        </a>

        <h2>Technologies</h2>
        <ul>
            <li>
                Node.js
            </li>
            <li>
                Express.js
            </li>
            <li>
                MongoDB
            </li>
            <li>
                GraphQL
            </li>
            <li>
                mySQL
            </li>
            <li>
                C
            </li>
            <li>
                C++
            </li>
        </ul>
        <ul>
            <li>
                React.js
            </li>
            <li>
                HTML
            </li>
            <li>
                CSS
            </li>
            <li>
                Javascript
            </li>
            <li>
                Bootstrap
            </li>
        </ul>
    </div>
  );
}
