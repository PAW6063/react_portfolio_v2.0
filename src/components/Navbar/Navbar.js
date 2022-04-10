import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <button className="nav-button">
          <FontAwesomeIcon icon={faBars} className="nav-button-icon" />
        </button>

        <ul className="nav-link-list mobile-nav" data-visible="true">
          <Link to="/about" className="nav-link link-1">
            <li className="nav-list-item">About</li>
          </Link>
          <Link to="/portfolio" className="nav-link link-2">
            <li className="nav-list-item">Portfolio</li>
          </Link>
          <Link to="/contact" className="nav-link link-3">
            <li className="nav-list-item">Contact</li>
          </Link>
          <Link to="/resume" className="nav-link link-4">
            <li className="nav-list-item">Resumé</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
