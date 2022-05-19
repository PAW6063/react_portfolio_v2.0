import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

  const ScrollToTop = (event) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    toggleNav();
  }

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <button className="nav-button" onClick={toggleNav}>
          <FontAwesomeIcon icon={navButton} className="nav-button-icon" />
        </button>

        <ul className="nav-link-list mobile-nav" data-visible={navState}>
          <Link to="/about" className="nav-link link-1" onClick={ScrollToTop}>
            <li className="nav-list-item">About</li>
          </Link>
          <hr/>
          <Link to="/portfolio" className="nav-link link-2" onClick={ScrollToTop}>
            <li className="nav-list-item">Portfolio</li>
          </Link>
          <hr/>
          <Link to="/contact" className="nav-link link-3" onClick={ScrollToTop}>
            <li className="nav-list-item">Contact</li>
          </Link>
          <hr/>
          <Link to="/resumé" className="nav-link link-4" onClick={ScrollToTop}>
            <li className="nav-list-item">Resumé</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
