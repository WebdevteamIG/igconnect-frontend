import React, { Component } from 'react'
import "./oicPageStyle.css";
import Navbar from "../Navbar.js"
import oicimage1 from './oic-image-1.png'
import audio from './Director-audio.mp3'

import OicChallenges from './OicChallenges'
import OicEventFlow from './OicEventFlow'
import OicProblemState from './OicProblemState'
import OicFooter from './OicFooter'
import Footer from "../Footer.js"


export default class OicPage extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <div className="row">
          <div className="col-lg-4 col-sm-12 my-auto">

            <h1 className="heading1 ml-5">OPEN INNOVATION CHALLENGE</h1>
          </div>
          <div className="col-lg-8 col-sm-12 text-right">
            <img src={oicimage1} alt="oic image 1" width="500px" height="500px" className="img-fluid graphics" />

          </div>
        </div>
        <div className="text-center">
          <p className="mx-auto" id="mainHeaderDescription" > In line with Atma Nirbhar Abhiyan, CII, NITW is conducting on Open Innocation Challenge for students and startups for developing apps and toys for children to help in their learning.
         </p>
          {/* Audio tag */}
          <div >
            <p className="d-inline audioLabel" > A messgae from our esteemed Director:</p>
            <audio className="d-inline ml-3 audioLabel" ref="audio_tag" src={audio} controls />
          </div>
          {/* Audio tag end*/}
        </div>




        <OicChallenges />
        <OicEventFlow />
        <OicProblemState />
        <OicFooter />
        <Footer />
      </div>
    )
  }
}
