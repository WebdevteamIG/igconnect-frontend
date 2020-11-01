import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const textareastyle = {
  width: "100%",
  height: "300px",
};

export default function OICIdeasubmission() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");

  const submitIdea = (e) => {
    e.preventDefault();
    console.log("submitted", name, email, idea);
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
            <form id="ideaform">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
