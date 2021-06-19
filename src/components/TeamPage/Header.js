import React from 'react'
import patri from './photos/patri.jpg';
import avinash from './photos/avinash.jpg';
import Board from './Board';

export default function Header() {
    return (
        <>
        <center>
            <h1>Faculty Incharge</h1>
            <img src={patri} width="300" height="300" alt="SRIHARI RAO PATRI"/>
            <h3>SREEHARI RAO PATRI</h3>
            <a href="https://nitw.ac.in/faculty/id/16301" className="btn btn-primary" >Profile</a>
            <hr />
        </center>
        <Board />
        <center>
            <hr />
            <h1>General Manager</h1>
            <img src={avinash} width="300" height="300" alt="SRIHARI RAO PATRI"/>
            <h3>AVINASH PULUGURTHA</h3>
            <a href="https://www.linkedin.com/in/avinash-pulugurtha-98b862160/" className="btn btn-primary" >Linkedin</a>&nbsp;&nbsp;
            <a href="/cii/team/ap861873@student.nitw.ac.in" className="btn btn-success" >Email</a>
        </center>

        </>
    )
}
