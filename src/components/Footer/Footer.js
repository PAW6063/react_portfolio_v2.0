import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">

      <ul className="footer-link-list">

        <Link to="" className="footer-link link-1">
          <li className="nav-list-item">
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
          </li>
        </Link>

        <Link to="" className="footer-link link-1">
          <li className="nav-list-item">
            <FontAwesomeIcon icon={faGithub} className="footer-icon" />
          </li>
        </Link>

        <Link to="" className="footer-link link-1">
          <li className="nav-list-item">
            <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
          </li>
        </Link>
      </ul>

      <h3>Copyright &copy; Phillip Welch 2022</h3>
    </div>
  );
}
