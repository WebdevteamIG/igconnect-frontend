import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import TechTeam from "./TechTeam";
import PRTeam from "./PRTeam";
import DesignTeam from "./Design";
import ECCTeam from "./ECCTeam";
import AIRteam from "./AIRTeam";
import Header from './Header';

const textareastyle = {
  width: "100%",
  height: "300px",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <Header />
      <TechTeam />
      <PRTeam />
      <DesignTeam />
      <ECCTeam />
      <AIRteam />
      <br/>
      <div className="container">
        <center>

        <div className="col-lg-2 col-md-0"></div>
          <div className="col-lg-10">
          <h3>Got a Project Idea !!</h3>
          <h5>We would love to support you. Submit your idea below and we will contact you</h5>
          <form id="ideaform" autoComplete="new-password">
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
                  autoComplete="off"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-success"
              >
                Submit
              </button>
            </form>
            <br />
            <br/>
          </div>
        </center>
      </div>
      <Footer />
    </>
  );
}
