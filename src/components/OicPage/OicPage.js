import React, { Component } from 'react'
import "./oicPageStyle.css";
import Navbar from "../Navbar.js"
import oicimage1 from './oic-image-1.png'
import audio from '../media/Director-audio.mp3'
import OicChallenges from './OicChallenges'
import OicEventFlow from './OicEventFlow'
import OicProblemState from './OicProblemState'
import OicFooter from './OicFooter'
import Footer from "../Footer.js"
import directorpic from '../media/person.png'

export default class OicPage extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <div className="row">
          <div className="col-lg-4 col-sm-12 my-auto">

            <h1 className="heading1 ml-5">OPEN INNOVATION CHALLENGE</h1>
            <div className="mt-4 ml-5 pl-2 text-left">
              <a href="https://ignitw.typeform.com/to/Ihz9RLmH" type="button" className="mybtn ">Register for All-India Open Innovation Challenge<i className="fas fa-angle-double-right ml-2 fas-icon"></i></a>
              {/* <button className="mybtn mt-3 "> VIEW EVENTS<i className="fas fa-angle-double-right ml-2"></i></button> */}
            </div >

          </div>
          <div className="col-lg-8 col-sm-12 text-right">
            <img src={oicimage1} alt="oic" width="500px" height="500px" className="img-fluid graphics" />

          </div>
        </div>
        <div className="text-center">
          <p className="mx-auto" id="mainHeaderDescription" > In line with Atma Nirbhar Abhiyan, CII, NITW is conducting on Open Innocation Challenge for students and startups for developing apps and toys for children to help in their learning.
         </p>
          {/* Audio tag */}
          <div >
            <img src={directorpic} alt="Director" width="20%" height="30%" />
            <p className="d-inline audioLabel" > A messgae from our esteemed Director:</p>
            <audio className="d-inline ml-3 mt-2 audioLabel" ref="audio_tag" src={audio} controls />
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
