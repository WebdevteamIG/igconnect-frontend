import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Mainform() {
  const { formid } = useParams();
  const [fields, setFields] = useState(false);
  const [title, setTilte] = useState("");
  const [sheetId, setSheetId] = useState("");
  const [exists, setExists] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      var resp = await fetch(
        `https://sheetman.glitch.me/sheets/getform?id=${formid}`
      );
      var response = await resp.json();
      console.log(response);
      if (!response.noform) {
        setTilte(response.title);
        setFields(JSON.parse(response.fields).fields);
        setSheetId(response.sheetId);
      } else {
        setTilte("No form here");
        setExists(false);
      }
    };
    if (localStorage.getItem(formid)) {
      setSubmitted(true);
    } else {
      getData();
    }
  }, [formid]);

  const uploadToDrive = async (e) => {
    setUploading(true);
    const domelem = e.target;
    const file = domelem.files[0];// Get the file
    const formdata = new FormData(); // Create a formdata object to send in the POST request
    formdata.append("file", file); // append the file with name as "file"
    var resp = await fetch("https://sheetman.glitch.me/drive/upload", {method: "POST", body : formdata}); //Sending the POST request
    var response = await resp.json();
    console.log(response);
    setUploading(false);
    domelem.setAttribute("uploadedurl", response.id);
    console.log(domelem);
  }

  const submitData = async (e) => {
    e.preventDefault();
    var values = [];
    for (let i = 0; i < fields.length; i++) {
      if(document.getElementById(JSON.stringify(i)).type === "file"){
        values.push(document.getElementById(JSON.stringify(i)).getAttribute("uploadedurl"));
      } else {
        values.push(document.getElementById(JSON.stringify(i)).value);
      }
    }
    console.log(values);

    var resp = await fetch("https://sheetman.glitch.me/sheets/append", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: sheetId,
        name: "Sheet1",
        ncells: fields.length,
        values: values,
      }),
    });
    var response = await resp.json();
    console.log(response);
    if (response.success) {
      alert("Form submitted");
      // localStorage.setItem(formid, true);
      setSubmitted(true);
    }
  };

  if (formid.includes("<script>")) {
    alert("You have been hacked\n You tried XSS and I hacked you. simple");
  }

  return (
    <div>
      <Navbar />
      <center>
        <h1>{title}</h1>
        {uploading && <h1>Uploading please wait......</h1>}
      </center>
      {!submitted ? (
        <div>
          {exists && (
            <div className="container">
              {fields && (
                <form onSubmit={submitData}>
                  {fields.map((field, id) => {
                    return field.type === "long" ? (
                      <div className="from-group" key={id}>
                        <label htmlFor={id}>{field.name} : </label>
                        <textarea
                          id={id}
                          width="100%"
                          height="600px"
                          className="form-control"
                          required={field.required}
                        ></textarea>
                      </div>
                    ) : field.type === "file" ? (
                      <div key={id} className="form-group">
                        <label htmlFor={id}>{field.name} : </label>
                        <input
                          type={field.type}
                          id={id}
                          name={id}
                          className="form-control"
                          placeholder={field.name}
                          required={field.required}
                          onChange={uploadToDrive}
                        />
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
                          required={field.required}
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
              {!fields && (
                <center>
                  <h1>Loading..... Please wait</h1>
                </center>
              )}
              <br />
              <br />
            </div>
          )}
        </div>
      ) : (
        <center>
          <br />
          <h1>Already responded to the form</h1>
          <br />
        </center>
      )}
      <Footer />
    </div>
  );
}
