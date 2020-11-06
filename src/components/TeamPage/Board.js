import React from "react";
import vakula from "./photos/vakula.jpg";
import Sonawane from "./photos/shirish.jpg";
import padma from "./photos/padma.jpg";
import karthik from "./photos/karthik.jpg";
import venkaiah from "./photos/venkaiah.jpg";
import kiran from "./photos/kirankumar.jpg";
import ranjan from "./photos/ranjanraout.jpg";
import anjaneyulu from "./photos/anjaneyulu.jpg";

export default function Board() {
  return (
    <>
      <br />
      <center>
        <h1>Board Members</h1>
      </center>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={vakula} alt="Card cap" />
              <div class="card-body">
                <h5 class="card-title">Dr . Mrs. VAKULA D</h5>
                <a
                  href="https://nitw.ac.in/faculty/id/16303/"
                  class="btn btn-primary"
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={Sonawane} alt="Card cap" />
              <div class="card-body">
                <h5 class="card-title">Dr. Sonawane Shirish Hari</h5>
                <a
                  href="https://www.nitw.ac.in/faculty/id/16328/"
                  class="btn btn-primary"
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" height="350" src={padma} alt="Card cap" />
              <div class="card-body">
                <h5 class="card-title">DR. PADMA K</h5>
                <a
                  href="https://www.nitw.ac.in/faculty/id/16409/"
                  class="btn btn-primary"
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={karthik} alt="Card cap" />
              <div class="card-body">
                <h5 class="card-title">Dr. Karthik Balasubramanian</h5>
                <a
                  href="https://www.nitw.ac.in/faculty/id/16513/"
                  class="btn btn-primary"
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={venkaiah} alt="Card cap" />
              <div class="card-body">
                <h5 class="card-title">Dr Chintham Venkaiah</h5>
                <a
                  href="https://www.nitw.ac.in/faculty/id/16235/"
                  class="btn btn-primary"
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={kiran} alt="Card cap" />
              <div class="card-body">
                <h5 class="card-title">Dr. KIRAN KUMAR K</h5>
                <a
                  href="https://nitw.ac.in/faculty/id/16419/"
                  class="btn btn-primary"
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={ranjan} alt="Card cap" />
              <div class="card-body">
                <h5 class="card-title">Dr. Rashmi Ranjan Rout</h5>
                <a
                  href="https://www.nitw.ac.in/faculty/id/16336/"
                  class="btn btn-primary"
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={anjaneyulu} alt="Card cap" />
              <div class="card-body">
                <h5 class="card-title">Prof ANJANEYULU L</h5>
                <a
                  href="https://www.nitw.ac.in/faculty/id/16297/"
                  class="btn btn-primary"
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
}
