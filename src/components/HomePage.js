import React, { Component } from 'react'
import Blog from './Blog'
import Events from './Events'
import Project from './Project'
import Footer from './Footer'
import firstimage from './images/first+image.png'
import Navbar from "./Navbar";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="row ">
          {/* text div */}
          <div className="col-4">
            <div className="headings-container mt-5 pt-2 pl-5 ml-5 ">
              <h1 className="text-uppercase">Ideate</h1>
              <h1 className="text-uppercase">Innovate</h1>
              <h1 className="text-uppercase">Incubate</h1>
              <p style={{width: "500px"}}>We are an incubation center that strives to promote innovations that have a direct impact on society, We do this by providing a platform for young and passionate innovators to incubate their startup and assist them at every step. 
From assisting innovators in acquiring the skills required to make their idea a reality to Intellectual Property Rights Cell, We have it all.</p>
              <button className="mybtn mt-3"> LEARN MORE ABOUT US<i className="fas fa-angle-double-right ml-2"></i></button>
            </div>
          </div>

          {/* graphic div */}
          <div className="col-8 text-right ">
            <img src={firstimage} alt="Innovation garage logo 2" width="320px" height="500px" className="right-graphics-position" />
            {/* <img src={`${process.env.PUBLIC_URL}/img/first+image.png`} alt="Innovation garage logo 2" width="487px" height="943px" /> */}
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
