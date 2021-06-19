import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Teamform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newemail, setnewemai] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    var data = {
      id: "1sK5MQ-JYacpJEwowvu8yp3GPpSNnM2CoKR28TWCZnTo",
      name: "Data",
      ncells: 3,
      values: [name, newemail, email, phone, img],
    };
    var resp = await fetch("https://sheetman.glitch.me/sheets/append", {
      method: "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    console.log(await resp.json());
    setLoading(false);
    alert("Submitted");
    setName("");
    setEmail("");
    setPhone("");
    setnewemai("");
  };

  // For uploading the file when file is selected
  const handleUpload = async (e) => {
    setUploading(true);
    const file = e.target.files[0];// Get the file
    const formdata = new FormData(); // Create a formdata object to send in the POST request
    formdata.append("file", file); // append the file with name as "file"
    var resp = await fetch("https://sheetman.glitch.me/drive/upload", {method: "POST", body : formdata}); //Sending the POST request
    var response = await resp.json();
    console.log(response);
    setImg(response.id);
    setUploading(false);
  }

  return (
    <div>
      <Navbar />
      <center>
        <h1>Team page missing details</h1>
        {loading && <h3>Submitting please wait...</h3>}
        {uploading && <h3>Uploading please wait...</h3>}
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
            <button type="submit" className="btn btn-success" >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
