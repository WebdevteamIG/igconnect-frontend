import React, { useState, useEffect } from "react";
import {getForm, append, createForm} from '../database/utils';

export default function Formadmin() {
  const [fields, setFields] = useState([]);
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [required, setRequired] = useState(false);
  const [title, setTitle] = useState("");
  const [allforms, setAllforms] = useState([]);
  const [login, setLogin] = useState(false);

  const makevisible = () => {
    visible ? setVisible(false) : setVisible(true);
  };

  const addField = () => {
    setFields([...fields, { name, type, required }]);
    setName("");
    setType("");
  };

  useEffect(() => {
    async function getForms() {
      var response = await getForm({
        sheetid: "12SQ2hzzYqUjkCzlDrSWg8dmxYdo6WGrJmSUaiE9JQ_E",
        id : "all"
      });
      console.log(response);
      setAllforms(response);
    }
    var password = prompt("Password please");
    if(password === null){
      window.location.reload();
    }
    if(window.forge_sha256(password) === "ecd71870d1963316a97e3ac3408c9835ad8cf0f3c1bc703527c30265534f75ae"){
      getForms();
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  const submitData = async () => {
    var data = { fields, title };
    console.log(JSON.stringify(data));
    var tempresp = await createForm();
    var sheetId = tempresp.sheetId;
    console.log(sheetId);
    var finalresp = await append({
      sheetid : "12SQ2hzzYqUjkCzlDrSWg8dmxYdo6WGrJmSUaiE9JQ_E",
      value: [
        JSON.stringify({ fields }),
        `${sheetId}`,
        allforms.length + 1,
        `${title}`,
      ],
      range: "A:E",
    })
    console.log(finalresp);
    if (finalresp.success) {
      alert("Form created");
    }
  };

  return (
    <div>
      {login && <div>
        <center>
        <h1>Admin panel to create and manage all forms</h1> <br />
        <a target="__blank" href="https://docs.google.com/spreadsheets/d/12SQ2hzzYqUjkCzlDrSWg8dmxYdo6WGrJmSUaiE9JQ_E/edit#gid=0">Main sheet</a>
        <br />
        <table className="table container">
          <thead>
            <tr>
              <td>#</td>
              <td>Title</td>
              <td>Responses URL</td>
              <td>View form</td>
            </tr>
          </thead>
          <tbody>
            {allforms.map((form, id) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{form[3]}</td>
                  <td>
                    <a
                      target="__blank"
                      href={`https://docs.google.com/spreadsheets/d/${form[1]}/edit#gid=0`}
                    >{`https://docs.google.com/spreadsheets/d/${form[1]}/edit#gid=0`}</a>
                  </td>
                  <td><a target="__blank" href={`/cii/forms/${form[2]}`}>view form</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={makevisible} className="btn btn-primary">
          Create Form
        </button>
      </center>
      {visible && (
        <div className="container">
          <br />
          <div className="form-group">
            <label>Title of the form</label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              className="form-control"
            />
          </div>
          <br />
          <table className="table">
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Type</td>
                <td>Required</td>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, id) => {
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{field.name}</td>
                    <td>{field.type}</td>
                    <td>{field.required ? "required" : "not required"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="form-group">
            <label>Name of the field</label>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Type of the field</label>
            <input
              type="text"
              onChange={(e) => {
                setType(e.target.value);
              }}
              value={type}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Required </label>
            <input
              type="checkbox"
              value={required}
              onChange={(e) => {
                setRequired(e.target.checked);
              }}
              className="form-control"
            />
          </div>
          <button onClick={addField} className="btn btn-primary">
            Add Field
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={submitData} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
      <br />
      <br />
        </div>}
        {!login && <center><h1>Access Denied. Get Out</h1></center>}
    </div>
  );
}
