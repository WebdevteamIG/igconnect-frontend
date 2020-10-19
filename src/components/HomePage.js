import React, { Component } from 'react'
import Blog from './Blog'
import Events from './Events'
import Project from './Project'
import Footer from './Footer'
import firstimage from './images/first+image.png'
import Navbar from "./Navbar";
import { Link} from 'react-router-dom'

const oicstyle = {
  color: "red",
  fontSize: "40px",
  textDecoration : "none"
}

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <center><Link to={`${process.env.PUBLIC_URL}/events/oic`} style={oicstyle}> Open Innovation Challenge is going on. Do check it out here </Link></center>
          </div>
          {/* text div */}
          <div className="col-lg-5 col-sm-12" id="mainHomeDiv">
            <div className="headings-container mt-5 pt-2  ">
              <h1 className="text-uppercase">Ideate</h1>
              <h1 className="text-uppercase">Innovate</h1>
              <h1 className="text-uppercase">Incubate</h1>
            </div>
            <p className="ml-3  text-justify" >We are an incubation center that strives to promote innovations that have a direct impact on society, We do this by providing a platform for young and passionate innovators to incubate their startup and assist them at every step.
From assisting innovators in acquiring the skills required to make their idea a reality to Intellectual Property Rights Cell, We have it all.</p>
            {/* <button className="mybtn mt-3"> LEARN MORE ABOUT US<i className="fas fa-angle-double-right ml-2"></i></button> */}

          </div>

          {/* graphic div */}
          <div className="col-lg-7 col-sm-12 text-right mt-3">
            <img src={firstimage} alt="Innovation garage logo 2" width="320px" height="500px" className="right-graphics-position img-fluid" />
            {/* <img src={`${process.env.PUBLIC_URL}/img/first+image.png`} alt="Innovation garage logo 2" width="487px" height="943px" /> */}


            <div className="social-icons-container">
              {/* facebook */}
              <a href="https://www.facebook.com/TheInnovationGarage" className="icon-button">
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* insta */}
              <a href="https://www.instagram.com/ig_nitw/" className="icon-button">
                <i className="fab fa-instagram"></i>
              </a>
              {/* linkedin */}
              <a href="https://www.instagram.com/ig_nitw/" className="icon-button" id="last-social-icon">
                <i className="fab fa-linkedin-in "></i>
              </a>
              {/* <i class="fab fa-twitter-square"></i> */}
            </div>

          </div>
        </div>


        <Events />
        <Project />
        <Blog />
        <Footer />

      </div >
    )
  }
}
