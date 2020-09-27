import React, { Component } from 'react'

export default class Events extends Component {
  render() {
    return (
      <div>
        <div className="row ">
          {/* graphic div */}
          <div className="col-6 text-left">
            <img src={`${process.env.PUBLIC_URL}/img/events+image.png`} alt="Event Graphics" height="550px"
              className="left-graphics-position" />

          </div>

          {/* text div */}
          <div className="col-6 mt-5 pr-5">
            <div className="container" id="dvEvents" >
              <h1 className="text-uppercase">AI, ML, ROBOTICS, HACKING, DESIGN, ETC.</h1>
              <br />
              <h1 className="text-uppercase">YOU NAME IT.</h1>
              <h1 className="text-uppercase">WE HAVE AN EVENT</h1>
            </div>
            <div className="text-right">

              <button className="mybtn mt-3 "> VIEW EVENTS<i className="fas fa-angle-double-right ml-2"></i></button>
            </div>
          </div>


        </div>
      </div >
    )
  }
}
