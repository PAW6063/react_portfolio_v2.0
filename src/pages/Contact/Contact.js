import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./Contact.css";



export default function Contact() {
  return (
    <div className="contact">
        <h1 className="main-header contact-header">{"<Contact Me/>"}</h1>

        <h3 className="info-header" >LinkedIn</h3>
        <ul className="info-list" >
            <li className="info-list-item" >
                <a className="info-link" ></a>
            </li>
        </ul>

        <h3 className="info-header" >Email</h3>
        <ul className="info-list" >
            <li className="info-list-item" >
                <a className="info-link" ></a>
            </li>
        </ul>
        
        <h2 className="contact-header">Message Me!</h2>
        <form className="contact-form">
            <label className="form-label name-label">Name</label>
            <input className=" form-input name-input"/>

            <label className="form-label email-label">Email</label>
            <input className="form-input email-input"/>

            <label className="form-label message-label">Message</label>
            <input className="form-input message input"/>

            <button className="form-button"></button>
        </form>
    </div>
  );
}
