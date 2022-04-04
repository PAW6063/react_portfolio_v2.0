import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from "../../logo.png";
import "./Navbar.css";



export default function Navbar() {
  return (
    <div className="navbar">
        <button>
            <i></i>
        </button>
        <ul>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Portfolio</a>
            </li>
            <li>
                <a>Contact</a>
            </li>
            <li>
                <a>Resumé</a>
            </li>
        </ul>
    </div>
  );
}
