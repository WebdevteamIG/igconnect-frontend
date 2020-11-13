import React, { Component } from 'react'
import Navbar from './Navbar'
import igpic from './igpic.png'
import {Container} from 'reactstrap'
import Footer from './Footer'
import './example.css'
import IntroAboutUs from './AboutUsPage/IntroAboutUs'
import OurMission from './AboutUsPage/OurMission';
import OurObjectives from './AboutUsPage/OurObjectives';
import InnovationGarage from './AboutUsPage/InnovationGarage';
import Facilities from './AboutUsPage/Facilities'
import RoleOfCII from './AboutUsPage/RoleOfCII'
import PastCollaborations from './AboutUsPage/PastCollaborations'

export default class AboutUs extends Component {
  render() {
    return (
      <>
      <Navbar />
      {/* <Container> */}
        <div>
            <IntroAboutUs/>      
            <OurMission />
            <OurObjectives />
            <InnovationGarage />
            <Facilities />
            <PastCollaborations />
            <RoleOfCII />
        </div>
      {/* </Container> */}
      <Footer />
      </>
    )
  }
}

