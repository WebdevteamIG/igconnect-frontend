import React, { Component } from 'react'
import Navbar from "../Navbar.js"


export default class ProdcastMain extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="text-center mx-auto">
          <h1 className="commonHeading d-inline">PRODCAST</h1>
        </div>

        <div className="text-left  mt-4" style={{ width: "700px" }} >
          <h3>1. tesla Prodcast </h3>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/kbulCM90w8w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}
