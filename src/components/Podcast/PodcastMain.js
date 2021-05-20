import React, { Component } from "react";

export default class ProdcastMain extends Component {
  render() {
    return (
      <div>
        <br />
        <center>
          <h1>Podcasts by Innovation Garage</h1>
        </center>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <center>
                <h3>Journey through college a glimpse into life</h3>
                <iframe
                  title="Journey through college a glimpse into life"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5M5WRmTISv4"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </center>
            </div>
            <div className="col-lg-12 col-md-12">
              <center>
                <h3>Striking The Balance</h3>
                <iframe
                  title="Striking The Balance"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ci_cLaXMDdc"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </center>
            </div>
            <div className="col-lg-12 col-md-12">
              <center>
                <h3>The Beauty lies in the details</h3>
                <iframe
                  title="The Beauty lies in the details"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/A0i0XyGwWss"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </center>
            </div>
          </div>
          <center>
            <h4>
              Join us at Impact tank &nbsp;&nbsp;&nbsp;
              <a
                href="https://forms.gle/JmDwpaFhnJw5gPPC7"
                className="btn btn-success"
              >
                Register
              </a>
            </h4>
          </center>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
