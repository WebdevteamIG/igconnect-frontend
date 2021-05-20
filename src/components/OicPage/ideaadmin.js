import React, { useState, useEffect} from "react";
import { database } from "../../Config";
import './admin.css';

export default function Ideaadmin() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    let ideastemp = [];
    database.ref("/teams").once('value').then((snap) => {
      var data = snap.val();
      for( var idea of Object.keys(data)){
        console.log(data[idea]);
        ideastemp.push(data[idea]);
      } 
      console.log(ideastemp);
      setIdeas(ideastemp);
    })
  }, [])

  return (
    <>
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
    </>
  );
}
