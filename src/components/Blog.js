import React, { Component } from 'react'
import blogimage from './images/blog+image.png'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {/* graphic div */}
          <div className="col-6 text-left">
            <img src={blogimage} alt="Event Graphics" width="650px" height="500px"
              className="ml-5" />

          </div>

          {/* text div */}
          <div className="col-6 pr-5">
            <div className="container mt-3" id="dvBlog" >
              <h1 className="text-uppercase">WE HAVE A VAST COLLECTION OF CONTENT EXPLORE NOW</h1>
            </div>
            <div className="text-right">
              <button className="mybtn mt-3 "> VIEW BLOG<i className="fas fa-angle-double-right ml-2"></i></button>
            </div>
          </div>


        </div>
      </div >
    )
  }
}


