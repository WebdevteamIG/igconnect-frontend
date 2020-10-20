import React, { Component } from 'react'

const prizestyle = {
  fontSize: "30px",
  lineHeight: "30px"
}

export default class OicChallenges extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="row mx-auto " id="OicChallengesRow" >
          <div className="col-lg-6 col-sm-12 ">
            <div className="">
              <i className="material-icons d-inline mr-1">extension</i>
              <h1 className="commonHeading d-inline">CHALLENGES</h1>
            </div>
            <p>Apps, AI and toys have helped accelerate physical, social and cognitive abilities of children. This innovation challenge aims to extract more such ideas in this field from students and innovators across the country</p>
          </div>
          <div className="col-lg-6 col-sm-12 ">
            <div className="">
              <i className="material-icons d-inline mr-1">extension</i>
              <h1 className="commonHeading d-inline">INCENTIVES</h1>
            </div>
            <ol>
              <li>Winners will get the opportunity to incubate their prototype at Center for Innovation and Incubation, NITW. Mentoring, Technology and Business development assistance will be provided.</li>
              <li className="font-weight-bold"><span style={prizestyle} >Cash prizes worth 1 Lakh.</span></li>
            </ol>

          </div>
        </div>

      </div >
    )
  }
}
