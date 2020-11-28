import React,{useState, useEffect} from 'react';

export default function Main() {

    const [rows, setRows] = useState([]);
    const [username, setUserName] = useState("");
    const [serverFail, setServerFail] = useState(0);


    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://leaderboardserver.herokuapp.com/score/")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              setServerFail(1);
              setRows(result.result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error);
              setServerFail(-1)
            }
          )
      }, [])

    // How to Sort : 
    // Score, Same score means same rank. 
    rows.sort((a, b) => (a.points < b.points) ? 1 : -1)
    var bounds = require('binary-search-bounds')
    return (
        <>
            <div><br></br></div>
            <div><br></br></div>
            <div className = "container">
                <center><h2>LeaderBoard</h2></center>
            </div>
            <div><br></br></div>
            <div className="container">
                <center>
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Score</th>
                    {/* <th scope="col">Issues Resolved</th> */}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row,index) => (
                    <tr className={row.username === username?"table-primary":""} key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{row.username}</td>
                    <td>{row.points}</td>
                    </tr>
                ))}
                    
                </tbody>
                </table>
                </center>
            </div>
        </>
    )
}