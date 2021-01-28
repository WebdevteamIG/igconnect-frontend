import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Mainform() {
  const { formid } = useParams();
  const [fields] = useState([
    { name: "Name", type: "text" },
    { name: "Phone number", type: "number" },
    { name: "Email", type: "long" },
  ]);
  const [title] = useState(`No form exists at this place. Form ID : ${formid}`);

  const submitData = (e) => {
    e.preventDefault();
    var values = [];
    for (let i = 0; i < fields.length; i++) {
      values.push(document.getElementById(JSON.stringify(i)).value);
    }
    console.log(values);
  };

  return (
    <div>
      <Navbar />
      <center>
        <h1>{title}</h1>
      </center>
      <div className="container">
        {fields && (
          <form onSubmit={submitData}>
            {fields.map((field, id) => {
              return field.type === "long" ? (
                <div className="from-group" key={id}>
                  <label htmlFor={id}>{field.name}</label>
                  <textarea
                    id={id}
                    width="100%"
                    height="600px"
                    className="form-control"
                  ></textarea>
                </div>
              ) : (
                <div key={id} className="form-group">
                  <label htmlFor={id}>{field.name} : </label>
                  <input
                    type={field.type}
                    id={id}
                    name={id}
                    className="form-control"
                    placeholder={field.name}
                  />
                </div>
              );
            })}
            <br />
            <center>
              <button className="btn btn-success">Submit</button>
            </center>
          </form>
        )}
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
