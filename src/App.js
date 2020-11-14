import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from 'history';
// import logo from "../igLogo.png";

import HomePage from "./components/HomePage";
import EventsPage from "./components/EventsPage";
import AboutUs from "./components/AboutUs";
import OicPage from "./components/OicPage/OicPage";
import OICidea from './components/OicPage/OICIdeasubmission';
import TeamPage from './components/TeamPage/TeamPage';
import Abouttest from './components/AboutUsPage/index';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router basename={"/"}>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={HomePage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              component={AboutUs}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/events`}
              component={EventsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/team`}
              component={TeamPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/events/oic`}
              component={OicPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/events/oic/ideasubmission`}
              component={OICidea}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/abouttest`}
              component={Abouttest}
            />
        </Router>
      </React.Fragment>
    );
  }
}
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
export default App;
