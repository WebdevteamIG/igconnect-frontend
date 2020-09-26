import React, { Component } from "react";
import { Link } from "react-router-dom";


// import { ButtonContainer } from "./Button";  project+image.png

export default class Details extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {/* text div */}
          <div className="col-5 pr-5" id="project-text-coloum">
            <div className="container " id="dvProject" >
              <h1 className="text-uppercase">WE MAKE THE FUTURE.</h1>
              <h1 className="text-uppercase"> TODAY.</h1>

            </div>
            <button className="mybtn mt-3 "> VIEW PROJECTS<i className="fas fa-angle-double-right ml-2"></i></button>
          </div>

          {/* graphic div */}
          <div className="col-7 text-right">
            <img src={`${process.env.PUBLIC_URL}/img/project+image.png`} alt="Event Graphics" height="500px" width="650px"
              className="ml-5" />
          </div>
        </div>
      </div >
    );
  }
}
