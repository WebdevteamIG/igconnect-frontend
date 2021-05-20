import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Main() {

    const [rows, setRows] = useState([]);
    // const [username] = useState("");
    const [, setServerFail] = useState(0);


    useEffect(() => {
        fetch("https://leaderboardserver.herokuapp.com/score/")
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
    let points = new Set()
    rows.sort((a, b) => (a.points < b.points) ? 1 : -1)
    rows.forEach(row => {
      
      points.add(row.points)
    });

    let pointsArr = Array.from(points)
    pointsArr.sort((a, b) => (a < b) ? 1 : -1)
    rows.forEach(row => {
      row.rank = pointsArr.indexOf(row.points)
    });
    return (
        <>
            <div><br></br></div>
            <div><br></br></div>
            <div className = "container">
                <center><h2 className="font-monospace">LeaderBoard</h2></center>
            </div>
            <div><br></br></div>
            <div className="container">
                <center>
                <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                    <th scope="col"><center>#</center></th>
                    <th scope="col"><center>Username</center></th>
                    <th scope="col"><center>Score</center></th>
                    {/* <th scope="col">Issues Resolved</th> */}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row,index) => (
                    <tr className={row.rank+1 <= 3?"table-secondary":""} key={index}>
                    <th scope="row"><center>{row.rank + 1}<ion-icon className="trophy"></ion-icon></center></th>
                    <td><center><Link to={`${process.env.PUBLIC_URL}/osf/leaderboard/${row.username}`}>{row.username}</Link></center></td>
                    <td><center>{row.points}</center></td>
                    </tr>
                ))}
                    
                </tbody>
                </table>
                </center>
            </div>
        </>
    )
}