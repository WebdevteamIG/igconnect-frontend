import React, { Component } from "react";
import { Link} from 'react-router-dom'


import projectimage from './images/project+image.png'

// import { ButtonContainer } from "./Button";  project+image.png

export default class Details extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {/* text div */}
          <div className="col-lg-5 col-sm-12 pr-5" id="project-text-coloum">
            <div className="container " id="dvProject" >
              <h1 className="text-uppercase">WE MAKE THE FUTURE.</h1>
              <h1 className="text-uppercase"> TODAY.</h1>

            </div>
            <Link to={`${process.env.PUBLIC_URL}/projects`} className="mybtn mt-3 "> VIEW PROJECTS<i className="fas fa-angle-double-right ml-2"></i></Link>
          </div>

          {/* graphic div */}
          <div className="col-lg-7 col-sm-12 text-right mt-5">
            <img src={projectimage} alt="Project Graphics" height="500px" width="650px"
              className=" img-fluid" id="projectimage" />
          </div>
        </div>
      </div >
    );
  }
}
