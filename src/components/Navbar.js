import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import nitw from './nitwlogo.png'
import iglogo from './images/IG-logo-WITHOUT-BG.png'
import c4ii from './images/C4II.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-lg" >
          <Link to="/" className="logo " >
          <img src={nitw} alt="Nitw" width="80px" height="80px" />
            <img src={iglogo} alt="Innovation garage logo 2" width="85px" height="80px" className="ml-3 mr-4" id="ig-logo" />

          </Link>
          <img src={c4ii} alt="Innovation garage logo 2" width="130px" height="85px" />
          

          <div className="ml-auto mr-4">
            <ul className="navbar-nav " >
              <li className="nav-item " >
                <Link to="/" className="nav-link"  >
                  HOME
              </Link>
              </li>
              <li className="nav-item ">
                <Link to="/events" className="nav-link ">
                  EVENTS
              </Link>
              </li>
              <li className="nav-item ">
                <Link to="/about" className="nav-link">
                  ABOUT
              </Link>
              </li>
              <li className="nav-item ">
                <Link to="#" className="nav-link">
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
