import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from "../../logo.png";
import "./Header.css";

import Navbar from "./Navbar/Navbar.js";

export default function Header() {
  return (
    <div className="header">
        <Navbar />
    </div>
  );
}
