import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-link-list">
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/phillip-welch-67a533214/",
          }}
          target="_blank"
          className="footer-link link-1"
        >
          <li className="footer-list-item">
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon icon-1" />
          </li>
        </Link>

        <Link
          to={{ pathname: "https://github.com/PAW6063" }}
          target="_blank"
          className="footer-link link-2"
        >
          <li className="footer-list-item">
            <FontAwesomeIcon icon={faGithub} className="footer-icon icon-2" />
          </li>
        </Link>

        <Link
          to={{ pathname: "https://twitter.com/Phillip__Welch" }}
          target="_blank"
          className="footer-link link-3"
        >
          <li className="footer-list-item">
            <FontAwesomeIcon icon={faTwitter} className="footer-icon icon-3" />
          </li>
        </Link>
      </ul>

      <h3 className="footer-copyright">Copyright &copy; Phillip Welch 2022</h3>
    </div>
  );
}
