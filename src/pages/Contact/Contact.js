import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="main-header">{"<Contact Me/>"}</h1>

      <ul className="info-list">
        <h3 className="info-header">LinkedIn</h3>
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/phillip-welch-67a533214/",
          }}
          target="_blank"
          className="info-link"
        >
          <li className="info-list-item">phillip-welch-67a533214/</li>
        </Link>

        <h3 className="info-header">Email</h3>
        <Link
          to="#"
          onClick={() => (window.location = "mailto:phillip.w3lch455@gmail.com")}
          className="info-link"
        >
          <li className="info-list-item">phillip.w3lch455@gmail.com</li>
        </Link>
      </ul>

      <h2 className="contact-header">Message Me!<span className="under-maintance">(Under Maintance)</span></h2>
      <form className="contact-form">
        <label className="form-label name-label">Name</label>
        <input className=" form-input name-input" />

        <label className="form-label email-label">Email</label>
        <input className="form-input email-input" />

        <label className="form-label message-label">Message</label>
        <textarea className="form-input message-input" />

        <button className="form-button">Send</button>
      </form>
    </div>
  );
}
