import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Navbar.css";



export default function Navbar() {
  return (
    <div className="navbar">
        <Link>
            <button>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
        </Link>
        <ul>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/portfolio">
                <li>Portfolio</li>
            </Link>
            <Link to="/contact">
                <li>Contact</li>
            </Link>
            <Link to="/resume">
                <li>Resume</li>
            </Link>
        </ul>
    </div>
  );
}
