import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light navbar-expand-lg" >
          <Link to="/" className="logo " >
            <img src={`${process.env.PUBLIC_URL}/img/IG-logo-WITHOUT-BG.png`} alt="Innovation garage logo 2" width="85px" height="80px" className="ml-3 mr-4" id="ig-logo" />

          </Link>
          <img src={`${process.env.PUBLIC_URL}/img/C4II.png`} alt="Innovation garage logo 2" width="130px" height="85px" />

          <div className="ml-auto mr-4">
            <ul className="navbar-nav " >
              <li className="nav-item " >
                <Link to="/" className="nav-link" id="homeTab" >
                  HOME
              </Link>
              </li>
              <li className="nav-item ">
                <Link to="/innovations" className="nav-link ">
                  EVENTS
              </Link>
              </li>
              <li className="nav-item ">
                <Link to="#images" className="nav-link">
                  PROJECTS
              </Link>
              </li>
              <li className="nav-item ">
                <Link to="/about" className="nav-link">
                  BLOG
              </Link>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
