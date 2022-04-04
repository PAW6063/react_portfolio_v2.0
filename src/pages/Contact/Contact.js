import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from "../../logo.png";
import "./Contact.css";



export default function Contact() {
  return (
    <div className="contact">
        <h1>{"<Contact Me/>"}</h1>

        <h3>LinkedIn</h3>
        <ul>
            <li>
                <a></a>
            </li>
        </ul>

        <h3>Email</h3>
        <ul>
            <li>
                <a></a>
            </li>
        </ul>
        
        <h2>Message Me!</h2>
        <form>
            <label>Name</label>
            <input/>

            <label>Email</label>
            <input/>

            <label>Message</label>
            <input/>

            <button></button>
        </form>
    </div>
  );
}
