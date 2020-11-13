import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { database } from "../../Config";

export default function Ideaadmin() {
  const [ideas, setIdeas] = useState([]);

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
