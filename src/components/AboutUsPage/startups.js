import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import skylark from "./collabs/skylark-dark.png";
import cusmat from "./collabs/cusmat-dark.png";
import archphillic from "./collabs/archphillic.jpg";
import epic from "./collabs/epicbikes.jpeg";
import kalam from './collabs/kalam.jpg';
import gbit from './collabs/gbit.png';
import flowhrex from './collabs/flohrex.png';

export default function Startups() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <center>
          <h1>
            Center for Innovation and Incubation | Innovation Garage has
            incubated many startups
          </h1>
          <h3>Some of the Well know startups</h3>
        </center>
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <img alt="Skylark Labs" src={skylark} height="230px" />
          </div>
          <div className="col-lg-9 col-md-9">
            <br />
            <h3>
              Skylark Labs
              <br />
            </h3>
            <p>
              Skylark Labs develops continuously evolving and customizable
              threat detection systems for enhanced physical security. Clients
              (CCTV or Drone companies) can customize proprietary AI solutions
              at the time of deployment or continuously evolve them if needed
              after deployment making them preferable to other comparable market
              solutions.
            </p>
            <a href="https://skylarklabs.ai/" className="btn btn-primary">
              Learn More
            </a>
          </div>
          <div className="col-lg-3 col-md-3">
            <br />
            <br /> <br />
            <img alt="CUSMAT TECHNOLOGIES" src={cusmat} height="35px" />
          </div>
          <div className="col-lg-9 col-md-9">
            <br />
            <h3>Cusmat Technologies</h3>
            <p>
              Enable organizations to Onboard, Assess, Train, Upskill, Plan
              Learning Tracks for the employees/ workforce to maximize retention
              rates and on the Job Performance by using our AR/VR, Cloud-based
              Learning Management system.
            </p>
            <a href="https://cusmat.com/" className="btn btn-primary">
              Learn More
            </a>
          </div>
          <div className="col-lg-3 col-md-3">
            <br />
            <img alt="Archphillic" src={archphillic} height="150px" />
          </div>
          <div className="col-lg-9 col-md-9">
            <br />
            <h3>Archphillic</h3>
            <p>
              ArchPhillic is a Virtual Reality Company which provides Virtual
              Reality and other immersive solutions to visualize and customize
              their Pre-constructed properties.
            </p>
            <a
              href="https://www.virtualrealitymarketing.com/company/archphillic/"
              className="btn btn-primary"
            >
              Learn More
            </a>
          </div>
          <div className="col-lg-3 col-md-3">
            <br />
            <img alt="Archphillic" src={epic} height="200px" />
          </div>
          <div className="col-lg-9 col-md-9">
            <br />
            <h3>Epick Bikes ( Centaur Automotive )</h3>
            <p>
              Centaur Automotive Pvt Ltd. is a technology based Indian EV
              company with a strong vision of development, implementation &
              commercialization of a sustainable transportation solution for
              daily commute. Epick Bikes is an affiliated brand under Centaur,
              which manufactures smart electric bikes for city range personal
              transportation. Keeping Convenience, Affordability & Customer
              Centricity as the core DNA, currently the company offers its smart
              e-bike solutions for B2B applications thus contributing to India's
              vision of building EV eco-system.
            </p>
            <a
              href="https://www.linkedin.com/company/epick-bikes/"
              className="btn btn-primary"
            >
              Learn More
            </a>
          </div>
          <div className="col-lg-3 col-md-3">
            <br />
            <img alt="Archphillic" src={kalam} height="200px" />
          </div>
          <div className="col-lg-9 col-md-9">
            <br />
            <h3>Kalam Notebooks</h3>
            <p>
            A startup that focuses on 'notebook advertising. Successfully sold over 25K Notebooks within a year
            </p>
            <a
              href="https://www.linkedin.com/in/ghanshyam-s/"
              className="btn btn-primary"
            >
              Learn More
            </a>
          </div>
          <div className="col-lg-3 col-md-3">
            <br />
            <img alt="Archphillic" src={gbit} height="130px" />
          </div>
          <div className="col-lg-9 col-md-9">
            <br />
            <h3>GBit Studios</h3>
            <p>
            GBit Studios consists of a group of individuals who share a common passion and love for making games. We design and develop games from scratch for the various niches of the gaming world, learning and growing together in the process.
            </p>
            <a
              href="https://gbitstudios.com/"
              className="btn btn-primary"
            >
              Learn More
            </a>
          </div>
          <div className="col-lg-3 col-md-3">
            <br /><br />
            <img alt="Archphillic" src={flowhrex} height="70px" />
          </div>
          <div className="col-lg-9 col-md-9">
            <br />
            <h3>Flowhrex Technologies</h3>
            <p>
            To make process intensification and flow chemistry, available, applicable and affordable for chemical industries and create a greener impact over Indian Chemical Industry
            </p>
            <a
              href="https://www.flowrhex.com/"
              className="btn btn-primary"
            >
              Learn More
            </a>
          </div>
          <center><br /><br /><h4>These are some of the Startups incbated at Innovation Garage. If you have a startup idea, We would love to help you with it. Go to the Team page and submit your idea, we will contact you!</h4></center>
        </div>
      </div>

      <Footer />
    </div>
  );
}
