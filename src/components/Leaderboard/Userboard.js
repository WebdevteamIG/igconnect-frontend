import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
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
            <Navbar />
            <br /><br/>
            <center><h1>User : {username} contributed to following repo's</h1></center>
            <div className="container">
                <center>
                <table className="table table-hover">
                <thead class="table-dark">
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
                    <td>{row.repo}</td>
                    <td>{row.points}</td>
                    </tr>
                ))}
                    
                </tbody>
                </table>
                </center>
            </div>
            <Footer />
        </div>
    )
}
