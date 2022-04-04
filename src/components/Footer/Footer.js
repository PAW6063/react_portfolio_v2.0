import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from "../../logo.png";
import "./Footer.css";



export default function Footer() {
  return (
    <div className="footer">
        <ul>
            <li>
                <i>LinkedIn</i>
            </li>
            <li>
                <i>Github</i>
            </li>
            <li>
                <i>Twitter</i>
            </li>
        </ul>
        <h3>Copyright &copy; Phillip Welch 2022</h3>
    </div>
  );
}
