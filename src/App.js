import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import logo from "../igLogo.png";

import HomePage from "./components/HomePage";
import EventsPage from './components/EventsPage'
import AboutUs from './components/AboutUs'
import OicPage from './components/OicPage/OicPage.js'



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/events" component={EventsPage} />
          <Route exact path="/events/oic" component={OicPage} />
          <Route exact path="/about" component={AboutUs} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
