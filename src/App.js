import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import logo from "../igLogo.png";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import ProjectPage from "./components/ProjectPage";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={ProjectPage} />

          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
