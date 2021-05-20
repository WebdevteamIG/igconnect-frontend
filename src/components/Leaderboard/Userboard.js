import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';

export default function Userboard() {

    const {username} = useParams();

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://leaderboardserver.herokuapp.com/score/${username}`)
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              setRepos(result.result);
            },
            (error) => {
              console.log(error);
            }
          )
    }, [username])

    return (
        <div>
            <br /><br/>
            <center><h1 className="font-monospace"><a href={`https://github.com/${username}`}>{username}</a> contributed to following repo's</h1></center>
            <div className="container">
                <center>
                <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Score</th>
                    {/* <th scope="col">Issues Resolved</th> */}
                    </tr>
                </thead>
                <tbody>
                    {repos.map((row,index) => (
                    <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td><a href={`https://github.com/${row.repo}/pulls?q=is%3Apr+author%3A${username}`}>{row.repo}</a></td>
                    <td>{row.points}</td>
                    </tr>
                ))}
                    
                </tbody>
                </table>
                </center>
            </div>
        </div>
    )
}
