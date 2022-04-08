import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Portfolio from "./pages/Portfolio/Portfolio.js";
import Contact from "./pages/Contact/Contact.js";
import Resume from "./pages/Resume/Resume.js";
import Error from "./pages/Error/Error.js";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about">
            <Header/>
            <About/>
            <Footer/>
          </Route>
          <Route exact path="/portfolio">
            <Header/>
            <Portfolio/>
            <Footer/>
          </Route>
          <Route exact path="/contact">
            <Header/>
            <Contact/>
            <Footer/>
          </Route>
          <Route exact path="/resumé">
            <Header/>
            <Resume/>
            <Footer/>
          </Route>
          <Route render={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
