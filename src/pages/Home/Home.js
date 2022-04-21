import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

import logo from "../../logo.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <img src={logo} className="home-logo" alt="logo" />
      <Link to="/about" className="home-link">
        <button className="home-button">Explore</button>
      </Link>
      <div className="home-heading">
        <h1 className="home-h1">{"<Developer>"}</h1>
        <h2 className="home-h2">
          <span className="home-span-1">var </span>
          <span className="home-span-2">name </span>
          <spam className="home-span-4">= </spam>
          <span className="home-span-3">"Phillip"</span>
          <spam className="home-span-4">;</spam>
        </h2>
        <h1 className="home-h1">{"</Developer>"}</h1>
      </div>
    </div>
  );
}
