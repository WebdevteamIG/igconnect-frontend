import React, { Component } from 'react'

export default class OicProblemState extends Component {
  render() {

    return (

      <div  >
        <div className="row" >
          <div className="text-center mx-auto">
            <i className="material-icons d-inline mr-1">extension</i>
            <h1 className="commonHeading d-inline">TO PARTICIPATE</h1>
          </div>

          <div className="lineBreak" ></div>
          <div className="text-left mx-auto mt-4 dvParticipant" style={{ width: "500px" }} >
            <p className="font-weight-bold">Eligibility Criteria:</p>
            <p>
              Participants have to be currently pursuing an Under Graduate/ Graduate degree or a Research Scholar in the domain of Engineering, Management, Medicine or Humanities.</p>
          </div>


        </div>

        {/* PROBLEM STATEMENTS div start */}
        <div className="row" >
          <div className=" text-center mx-auto">
            <h1 className="commonHeading ">PROBLEM STATEMENTS</h1>
          </div>

          <div className="lineBreak" ></div>
          <div className="text-left mx-auto mt-4" style={{ width: "700px" }} >
            <ol>
              <li>AI based games to provide interactive and personalized learning experiences.
               </li>
              <li>Modular building systems and toys to encourage creativity.
               </li>
              <li>
                Puzzles to enhance critical thinking.
               </li>
              <li>
                Toys inspired by Indian heritage to promote culture and togetherness.
               </li>
              <li>
                Games using recycled materials to educate children about sustainability.
               </li>
              <li>
                Board games for leisure and promoting teamwork.
               </li>
              <li>
                Digital games for competitive learning.
               </li>
            </ol>
          </div>


        </div>

        <button className="btn btn-primary">Register</button>

      </div >
    )
  }
}

