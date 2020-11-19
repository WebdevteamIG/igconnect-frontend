import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import skylark from './collabs/skylark-dark.png'

export default function Startups() {
    return (
        <div>
            <Navbar />
            <div className="container">
            <center><h1>Center for Innovation and Incubation | Innovation Garage has incubated many startups</h1>
                <h3>Some of the Well know startups</h3>
            </center>
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <img alt="Skylark Labs" src={skylark} height="230px"/>
                </div>
                <div className="col-lg-9 col-md-9"><br />
                    <h3>Skylark Labs</h3>
                    <p>Skylark Labs develops continuously evolving and customizable threat detection systems for enhanced physical security. Clients (CCTV or Drone companies) can customize proprietary AI solutions at the time of deployment or continuously evolve them if needed after deployment making them preferable to other comparable market solutions.</p>
                    <a href="https://skylarklabs.ai/" className="btn btn-primary" >Learn More</a>
                </div>
            </div>
            </div>

            <Footer />
        </div>
    )
}
