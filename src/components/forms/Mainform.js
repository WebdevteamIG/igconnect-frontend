import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FormStyles.css";
import mailIcon from "../images/mail_icon.svg";
import { getForm, append, upload } from "../database/utils";

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
      var response = await getForm({
        sheetid: "12SQ2hzzYqUjkCzlDrSWg8dmxYdo6WGrJmSUaiE9JQ_E",
        id: `${formid}`,
      });
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

  const uploadToDrive = async (e) => {
    setUploading(true);
    const domelem = e.target;
    const file = domelem.files[0]; // Get the file
    var resp = await upload({file});
    console.log(resp);
    setUploading(false);
    domelem.setAttribute("uploadedurl", resp.id);
    console.log(domelem);
  };

  const submitData = async (e) => {
    e.preventDefault();
    var values = [];
    for (let i = 0; i < fields.length; i++) {
      if (document.getElementById(JSON.stringify(i)).type === "file") {
        values.push(
          document.getElementById(JSON.stringify(i)).getAttribute("uploadedurl")
        );
      } else {
        values.push(document.getElementById(JSON.stringify(i)).value);
      }
    }
    console.log(values);
    var response = await append({
      sheetid: sheetId,
      range: `A:${String.fromCharCode(
        "A".charCodeAt(0) + parseInt(fields.length - 1)
      )}`,
      value : values
    });
    if (response.success) {
      alert("Form submitted");
      // localStorage.setItem(formid, true);
      setSubmitted(true);
    }
  };

  if (formid.includes("<script>")) {
    alert("You have been hacked\n You tried XSS and now your hacked");
  }

  return (
    <div>
      <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
          <div className="card card-3">
            <div className="card-heading ">
              <h1 className="idea-heading px-5" id="id-heading">
                {title}
              </h1>
              {uploading && (
                <h1 className="idea-heading px-5" id="id-heading">
                  Uploading please wait......
                </h1>
              )}
              <img
                src={mailIcon}
                alt="Mail Icon"
                className="mailIcon img-thumbnail"
              />
            </div>
            {!submitted ? (
              <div>
                {exists && (
                  <div className="card-body">
                    {fields && (
                      <form onSubmit={submitData}>
                        {fields.map((field, id) => {
                          return field.type === "long" ? (
                            <div className="input-group" key={id}>
                              <label className="label--style" htmlFor={id}>
                                {field.name} :
                              </label>
                              <textarea
                                id={id}
                                width="100%"
                                height="600px"
                                className="input--style-3 input--style-4"
                                required={field.required}
                              ></textarea>
                            </div>
                          ) : field.type === "file" ? (
                            <div key={id} className="image-upload-wrap">
                              <label className="label--style" htmlFor={id}>
                                {field.name} :{" "}
                              </label>
                              <input
                                type={field.type}
                                id={id}
                                name={id}
                                className="file-upload-input"
                                placeholder={field.name}
                                required={field.required}
                                onChange={uploadToDrive}
                              />
                              <div className="drag-text">
                                <i className="fas fa-upload fas-upload-icon"></i>
                                <p>Choose file or drag here</p>
                              </div>
                            </div>
                          ) : (
                            <div key={id} className="input-group">
                              <label className="label--style" htmlFor={id}>
                                {field.name} :{" "}
                              </label>
                              <input
                                type={field.type}
                                id={id}
                                name={id}
                                className="input--style-3"
                                placeholder={field.name}
                                required={field.required}
                              />
                            </div>
                          );
                        })}
                        <br />
                        <div className="p-t-10 mt-3">
                          <button
                            className="btn btn--pill btn--blue"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
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
              <div
                className="text-center thankudiv "
                style={{ color: "white" }}
              >
                <h1 className="font-weight-bold pb-2">Thank You!</h1>
                <h4>Your submission has been successfully sent.</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}