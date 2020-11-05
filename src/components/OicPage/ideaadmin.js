import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { database } from "../../Config";

export default function Ideaadmin() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    database.ref("teams/").once("value", (snap) => {
      var data = snap.val();
      var teams = Object.keys(data);
      var allideas = [];
      for (var team of teams) {
        allideas.push(data[team]);
      }
      setIdeas(allideas);
      console.log(ideas);
    });
  });

  console.log(ideas);
  return (
    <>
      <Navbar />
      <center>
      <table>
        <thead>
          <tr>
            <td>Team Name</td>
            <td>Leader Name</td>
            <td>Idea</td>
          </tr>
        </thead>
        <tbody>
          {ideas.map((idea, id) => {
            return (
              <tr key={id}>
                <td>{idea.teamName}</td>
                <td>{idea.name}</td>
                <td>{idea.idea}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </center>
      <br />
      <Footer />
    </>
  );
}
