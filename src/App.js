import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
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
        <Router basename={'/cii'}>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
          <Route exact path={`${process.env.PUBLIC_URL}/events`} component={EventsPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/events/oic`} component={OicPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/about}`} component={AboutUs} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
