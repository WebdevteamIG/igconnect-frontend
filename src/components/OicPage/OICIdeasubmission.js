import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {database} from '../../Config'
import emailjs from 'emailjs-com';

const textareastyle = {
  width: "100%",
  height: "300px",
};
export default function OICIdeasubmission() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [teamName, setTeamName] = useState("");
  const submitbtn = useRef(null);

  useEffect(() => {
    if(localStorage.getItem("idea")){
      var draftIdea = JSON.parse(localStorage.getItem("idea"));
      setName(draftIdea.name);
      setEmail(draftIdea.email);
      setTeamName(draftIdea.teamName);
      setIdea(draftIdea.idea);
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    if(teamName == "" || name == "" || email == "" || idea == ""){
      alert("fill all details");
      return;
    } 

    emailjs.sendForm('idea-confirmation', 'template_meswgni', e.target, 'user_afH6uJhaoCv8BApXtEVTq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      var draftIdea = {};
      draftIdea.name = name;
      draftIdea.email = email;
      draftIdea.idea = idea;
      draftIdea.teamName = teamName;
      localStorage.setItem("idea", JSON.stringify(draftIdea));
      database.ref("teams/" + teamName).set({
        teamName : teamName,
        name: name,
        idea:idea,
        email : email
      });
      alert("Idea saved");
      setEmail("");
      setName("");
      setIdea("");
      setTeamName("");
      if(submitbtn){
        submitbtn.current.setAttribute("disabled", "true");
      }
  }

  // const submitIdea = (e) => {
  //   e.preventDefault();
  //   var draftIdea = {};
  //   draftIdea.name = name;
  //   draftIdea.email = email;
  //   draftIdea.idea = idea;
  //   draftIdea.teamName = teamName;
  //   localStorage.setItem("idea", JSON.stringify(draftIdea));
  //   database.ref("teams/" + teamName).set({
  //     teamName : teamName,
  //     name: name,
  //     idea:idea,
  //     email : email
  //   });
  //   alert("Idea saved");
  //   setEmail("");
  //   setName("");
  //   setIdea("");
  //   setTeamName("");
  //   if(submitbtn){
  //     submitbtn.current.setAttribute("disabled", "true");
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-0"></div>
          <div className="col-lg-10">
            <h1>Open Innovation Challenge Idea Submission</h1>
            <h3>Instructions for Submission</h3>
            <ol>
              <li>Fill the below form for submission</li>
              <li>Only one Team member has to fill the form</li>
              <li>If you want to attach any Github readme or any other sources, You can paste the links in idea section.</li>
              <li>After you submit you will be alerted with Idea saved</li>
              <li>You idea will also be visible in text boxes once you refresh.</li>
            </ol>
            <form id="ideaform" autoComplete="new-password" onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Team Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="teamName"
                  placeholder="Team Name"
                  value={teamName}
                  name="teamName"
                  onChange={(e) => {
                    setTeamName(e.target.value);
                  }}
                  autoComplete="new-password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  autoComplete="new-password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  autoComplete="new-password"
                />
              </div>
              <div className="form-group">
                <label>Your Idea</label>
                <textarea
                  className="form-control"
                  style={textareastyle}
                  placeholder="Your Awesome Idea"
                  value={idea}
                  name="idea"
                  onChange={(e) => {
                    setIdea(e.target.value);
                  }}
                  autoComplete="off"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                ref={submitbtn}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
