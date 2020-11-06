import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {database} from '../../Config'

const textareastyle = {
  width: "100%",
  height: "300px",
};
export default function OICIdeasubmission() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    if(localStorage.getItem("idea")){
      var draftIdea = JSON.parse(localStorage.getItem("idea"));
      setName(draftIdea.name);
      setEmail(draftIdea.email);
      setTeamName(draftIdea.teamName);
      setIdea(draftIdea.idea);
    }
  }, [])

  const submitIdea = (e) => {
    e.preventDefault();
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
  };

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
              <li>Instruction 1</li>
            </ol>
            <form id="ideaform" autoComplete="new-password">
              <div className="form-group">
                <label htmlFor="name">Team Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="teamName"
                  placeholder="Team Name"
                  value={teamName}
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
                  onChange={(e) => {
                    setIdea(e.target.value);
                  }}
                  autoComplete="off"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={submitIdea}
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