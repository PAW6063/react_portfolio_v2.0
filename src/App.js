import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Portfolio from "./pages/Portfolio/Portfolio.js";
import Contact from "./pages/Contact/Contact.js";
import Resume from "./pages/Resume/Resume.js";
import Error from "./pages/Error/Error.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resumé" component={Resume} />
        <Route render={Error} />
      </Switch>
    </Router>
  );
}

export default App;
