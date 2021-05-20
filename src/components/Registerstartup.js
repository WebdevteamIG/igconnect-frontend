import React from "react";
import patri from './TeamPage/photos/patri.jpg'
export default function Registerstartup() {
  return (
    <div>
      <div className="row">

        <div className="col-lg-5 col-sm-12" id="mainHomeDiv">
        <div className="headings-container mt-5 pt-2  ">
          <h1 className="text-uppercase">REGISTER</h1>
          <h1 className="text-uppercase">STARTUP</h1>
        </div>
        <p className="ml-3  text-justify" >At CII we provide your startup with everything that is required to set you on the trajectory to accomplish your moonshot. <br /> We provide seed funding, makers' space, computation lab, fabrication lab, patent registration assistance. You name it, we do it.</p>
        <a className="mybtn mt-3" target="__blank" href="https://us7.campaign-archive.com/?u=35ecfa46bb45c663d16023fc5&id=c0b0caf49e"> REGISTER &gt;&gt;<i className="fas fa-angle-double-right ml-2"></i></a>
        
        <div className="headings-container mt-5 pt-2  ">
          <h1 className="text-uppercase">STEPS To</h1>
          <h1 className="text-uppercase">REGISTER</h1>
          <h1 className="text-uppercase">YOUR STARTUP</h1>
        </div>
        <div className="headings-container mt-5 pt-2  ">
          <ol>
              <li>Submit your idea template, business model canvas and your pitch deck click here to view sample files</li>
              <li>Pitch your startup to a panel of experts. The panel will check the technical feasibility and market viability and get back to you.</li>
              <li>Submit your requirements and roadmap</li>
          </ol>
          <a className="mybtn mt-3" target="__blank" href="https://us7.campaign-archive.com/?u=35ecfa46bb45c663d16023fc5&id=c0b0caf49e"> REGISTER &gt;&gt;<i className="fas fa-angle-double-right ml-2"></i></a>
        </div>
            <h1 style={{fontWeight : "bold"}}>REACH OUT TO US</h1>
            <div className="col-sm-4">
                <img src={patri} width="300%" height="500%" alt="SHREEHARI RAO PATRI" />
            </div>
            <div className="col-sm-8">
                <h1>Faculty Incharge</h1>
                <h3>Dr. SREEHARI RAO PATRI</h3>
                <h5>patri@nitw.ac.in</h5>
                <h5>8332969357</h5>
            </div>
        </div>
      </div>
    </div>
  );
}
