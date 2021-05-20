import React, { Component } from 'react'
import "./oicPageStyle.css";
import oicimage1 from './oic-image-1.png'
import audio from '../media/Director-audio.mp3'
import OicChallenges from './OicChallenges'
import OicEventFlow from './OicEventFlow'
import OicProblemState from './OicProblemState'
import OicFooter from './OicFooter'
import directorpic from '../media/person.png'
import OicWinners from "./OicWinners"


export default class OicPage extends Component {
  render() {
    return (
      <div >
        <div className="row">
          <div className="col-lg-4 col-sm-12 my-auto col-sm-12-1">

            <h1 className="heading1 ml-5">OPEN INNOVATION CHALLENGE</h1>
            <div className="mt-4  pl-2 text-left register-btn">
              <p className="mx-auto mt-1" id="mainHeaderDescription" > In line with Atma Nirbhar Abhiyan, CII, NITW is conducting an Open Innocation Challenge for students and startups for developing apps and toys for children to help in their learning.
              </p>

              {/* <button className="mybtn mt-3 "> VIEW EVENTS<i className="fas fa-angle-double-right ml-2"></i></button> */}
            </div >

          </div>
          <div className="col-lg-8 col-sm-12 text-right">
            <img src={oicimage1} alt="oic" width="500px" height="500px" className="img-fluid graphics" />

          </div>
        </div>
        <div className="text-center">

          {/* Audio tag */}
          <div className="text-center">
            <img src={directorpic} alt="Director" width="20%" height="30%" />

          </div>
          <div>
            <p className="d-inline audioLabel" > A message from our esteemed Director:</p>
            <audio className="d-inline ml-4 mt-2 audioLabel" ref="audio_tag" src={audio} controls type="audio/mpeg" autoPlay={false} />
          </div>
          {/* Audio tag end*/}
        </div>




        <OicChallenges />
        <OicEventFlow />
        <OicProblemState />
        <OicWinners />
        <OicFooter />
      </div >
    )
  }
}
