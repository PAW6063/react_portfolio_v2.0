import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

import "./Error.css";

export default function Error() {
  return (
    <div className="error">
      <h1 className="error-header">{"<404/>"}</h1>
      <h2 className="error-subheader">The page you are searching for does not exist!</h2>
      <Link to="/" className="error-link">
        <button className="error-button">Return to Site</button>
      </Link>
    </div>
  );
}
