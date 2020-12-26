import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import TechTeam from "./TechTeam";
import PRTeam from "./PRTeam";
import DesignTeam from "./Design";
import ECCTeam from "./ECCTeam";
import AIRteam from "./AIRTeam";
import Header from "./Header";

const textareastyle = {
  width: "100%",
  height: "300px",
};

export default function TeamPage() {
  const sendMail = (e) => {
    e.preventDefault();
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "ig-nitw@student.nitw.ac.in",
      Password: "Innovate@IG",
      To: `${e.target.email.value}`,
      From: "ig-nitw@student.nitw.ac.in",
      Subject: "Confirmation of Idea Submission",
      Body: `Hello ${e.target.name.value} <br > <br>  &nbsp;&nbsp;&nbsp;&nbsp;This email is sent as a confirmation of your idea submission. Innovation Garage is always open to new startup/project ideas. We will thoroughly review your idea and assign the right person for your project soon. Do not hesitate to write to us if needed. <br> <br> Your Details : <br> Name: ${e.target.name.value} <br> Idea : ${e.target.idea.value}`,
    }).then(function (message) {
      console.log(message);
      alert("Idea submitted successfully");
    });
  };

  return (
    <>
      <Navbar />
      <Header />
      <TechTeam />
      <PRTeam />
      <DesignTeam />
      <ECCTeam />
      <AIRteam />
      <br />
      <div className="container">
        <center>
          <div className="col-lg-2 col-md-0"></div>
          <div className="col-lg-10">
            <h3>Got a Project Idea !!</h3>
            <h5>
              We would love to support you. Submit your idea below and we will
              contact you
            </h5>
            <form id="ideaform" autoComplete="new-password" onSubmit={sendMail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
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
                  autoComplete="new-password"
                />
              </div>
              <div className="form-group">
                <label>Your Idea</label>
                <textarea
                  className="form-control"
                  style={textareastyle}
                  placeholder="Your Awesome Idea"
                  id="idea"
                  autoComplete="off"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
            <br />
            <br />
          </div>
        </center>
      </div>
      <Footer />
    </>
  );
}
