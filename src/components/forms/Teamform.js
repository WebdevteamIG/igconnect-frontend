import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Compress from 'react-image-file-resizer'

export default function Teamform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newemail, setnewemai] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email);

    var data = {
      id: "1sK5MQ-JYacpJEwowvu8yp3GPpSNnM2CoKR28TWCZnTo",
      name: "Data",
      ncells: 3,
      values: [name, newemail, email, phone, img],
    };
    var resp = await fetch("https://sheetman.herokuapp.com/sheets/append", {
      method: "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    var response = await resp.json();
    console.log(response);
    alert("Submitted");
  };

  // const base64calc = (file) => {
  //     return new Promise((res,rej) => {
  //         var filereader = new FileReader();
  //         filereader.readAsDataURL(file);
  //         filereader.onload = () => {
  //           res(filereader.result);
  //         }
  //         filereader.onerror = (e) => {
  //             rej(e);
  //         }
  //     })
  // }

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    Compress.imageFileResizer(
      file, // the file from input
      480, // width
      480, // height
      "JPEG", // compress format WEBP, JPEG, PNG
      70, // quality
      0, // rotation
      (uri) => {
        setImg(uri);
        // You upload logic goes here
      },
      "base64" // blob or base64 default base64
    );
      // const base64 = await base64calc(e.target.files[0]);
    //   console.log(base64);
  }

  return (
    <div>
      <Navbar />
      <center>
        <h1>Team page missing details</h1>
      </center>
      <div className="container">
        <div>
          <form
            id="ideaform"
            autoComplete="new-password"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                autoComplete="new-password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
                name="email"
                value={newemail}
                onChange={(e) => {
                  setnewemai(e.target.value);
                }}
                autoComplete="new-password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Linkedin</label>
              <input
                type="text"
                className="form-control"
                id="linkedin"
                placeholder="linkedin"
                name="name"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="new-password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Github</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                name="name"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                autoComplete="new-password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                className="form-control"
                id="phone"
                onChange={handleUpload}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
