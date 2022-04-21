import React, { useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Navbar.css";

export default function Navbar() {

  const [navState, setNavState] = useState("false");
  const [navButton, setNavButton] = useState(faBars);

  const toggleNav = (event) => {
    if (navState === "true") {
      setNavState("false");
      setNavButton(faBars);
    } else {
      setNavState("true");
      setNavButton(faXmark);
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <button className="nav-button" onClick={toggleNav}>
          <FontAwesomeIcon icon={navButton} className="nav-button-icon" />
        </button>

        <ul className="nav-link-list mobile-nav" data-visible={navState}>
          <Link to="/about" className="nav-link link-1" onClick={toggleNav}>
            <li className="nav-list-item">About</li>
          </Link>
          <Link to="/portfolio" className="nav-link link-2" onClick={toggleNav}>
            <li className="nav-list-item">Portfolio</li>
          </Link>
          <Link to="/contact" className="nav-link link-3" onClick={toggleNav}>
            <li className="nav-list-item">Contact</li>
          </Link>
          <Link to="/resumé" className="nav-link link-4" onClick={toggleNav}>
            <li className="nav-list-item">Resumé</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
