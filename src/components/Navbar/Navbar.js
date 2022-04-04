import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./Navbar.css";



export default function Navbar() {
  return (
    <div className="navbar">
        <Link>
            <button>
                <i></i>
            </button>
        </Link>
        <ul>
            <Link>
                <li></li>
            </Link>
            <Link>
                <li></li>
            </Link>
            <Link>
                <li></li>
            </Link>
            <Link>
                <li></li>
            </Link>
            <Link>
                <li></li>
            </Link>
        </ul>
    </div>
  );
}
