import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Mainform() {
  const { formid } = useParams();
  const [fields, setFields] = useState([]);
  const [title, setTilte] = useState("");
  const [sheetId, setSheetId] = useState("");
  const [exists, setExists] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const getData = async () => {
      var resp = await fetch(
        `https://sheetman.herokuapp.com/sheets/getform?id=${formid}`
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
    getData();
    if (localStorage.getItem(formid)) {
      setSubmitted(true);
    }
  }, [formid]);

  const submitData = async (e) => {
    e.preventDefault();
    var values = [];
    for (let i = 0; i < fields.length; i++) {
      values.push(document.getElementById(JSON.stringify(i)).value);
    }
    console.log(values);

    var resp = await fetch("https://sheetman.herokuapp.com/sheets/append", {
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
      localStorage.setItem(formid, true);
      setSubmitted(true);
    }
  };

  if (formid.includes("<script>")) {
    alert("You have been hacked\n You tried XSS and I hacked you simple");
  }

  return (
    <div>
      <Navbar />
      <center>
        <h1>{title}</h1>
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
                        <label htmlFor={id}>{field.name}</label>
                        <textarea
                          id={id}
                          width="100%"
                          height="600px"
                          className="form-control"
                          required={field.required}
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
              <br />
              <br />
            </div>
          )}
        </div>
      ) : (
        <center>
          <br />
          <h1>Responded to the form</h1>
          <br />
        </center>
      )}
      <Footer />
    </div>
  );
}
