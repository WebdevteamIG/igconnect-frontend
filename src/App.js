import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
// import logo from "../igLogo.png";

import HomePage from "./components/HomePage";
import EventsPage from "./components/EventsPage";
import OicPage from "./components/OicPage/OicPage";
import OICidea from "./components/OicPage/OICIdeasubmission";
import TeamPage from "./components/TeamPage/TeamPage";
import About from "./components/AboutUsPage/index";
import Hackathon from "./components/hackathon/index";
import IdeaAdmin from "./components/OicPage/ideaadmin";
import Startups from "./components/AboutUsPage/startups";
import Leaderboard from "./components/Leaderboard/leaderboard";
import Projects from "./components/Projects/Projects";
import Userboard from "./components/Leaderboard/Userboard";
import Teamform from "./components/forms/Teamform";
import Formadmin from "./components/forms/Formadmin";
import Mainform from "./components/forms/Mainform";
import Prodcast from "./components/Podcast/PodcastMain";
import Cynuxsecurity from './components/Projects/Cynuxsecurity';

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
            component={About}
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
            path={`${process.env.PUBLIC_URL}/events/oic/ideasubmissiondone`}
            component={OICidea}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/events/oic/ideasubmission/adminrandom`}
            component={IdeaAdmin}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/makerswave`}
            component={Hackathon}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/startups`}
            component={Startups}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects`}
            component={Projects}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/osf/leaderboard`}
            component={Leaderboard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/osf/leaderboard/:username`}
            component={Userboard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/formsadmin`}
            component={Formadmin}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/forms/1`}
            component={Teamform}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/forms/:formid`}
            component={Mainform}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/cynuxsecurity`}
            component={Cynuxsecurity}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/podcasts`}
            component={Prodcast}
          />
        </Router>
      </React.Fragment>
    );
  }
}
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});
export default App;
