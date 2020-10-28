import React, { useState } from "react";
import SeminarDataService from "../../Services/SeminarService";
import { MDBBtn } from "mdbreact";

import "./AddSeminar.css";

const AddSeminar = () => {
  const initialSeminarState = {
    id: null,
    title: "",
    speaker: "",
    seminarDateTime: "",
    sits: "",
    description: "",
    published: false,
  };
  const [seminar, setSeminar] = useState(initialSeminarState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSeminar({ ...seminar, [name]: value });
  };

  const saveSeminar = () => {
    var data = {
      title: seminar.title,
      speaker: seminar.speaker,
      seminarDateTime: seminar.seminarDateTime,
      sits: seminar.sits,
      description: seminar.description,
    };

    SeminarDataService.create(data)
      .then((response) => {
        setSeminar({
          id: response.data.id,
          title: response.data.title,
          speaker: response.data.speaker,
          seminarDateTime: response.data.seminarDateTime,
          sits: response.data.sits,
          description: response.data.description,
          published: response.data.published,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newSeminar = () => {
    setSeminar(initialSeminarState);
    setSubmitted(false);
  };

  return (
    <div className="container inline">
      <br />
      <div>
        <h2 className="text">Add Semianr Page - Admin</h2>
      </div>
      <br />
      <div className="jumbotron">
        {submitted ? (
          <div>
            <h4>Successful Submit!</h4>
            <MDBBtn
              color="success"
              onClick={newSeminar}
              className="btn btn-success btn-lg"
            >
              Save Seminar
            </MDBBtn>

            <MDBBtn
              href="/ListOfSem/"
              color="secondary"
              className="btn btn-warning btn-lg"
            >
              Back to Seminars
            </MDBBtn>
          </div>
        ) : (
          <div className="col-md-12">
            <div className="form-group ">
              <label htmlFor="title"></label>
              <input
                type="text"
                placeholder="Title"
                className="form-control form-control-lg"
                id="title"
                required
                value={seminar.title}
                onChange={handleInputChange}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="speaker"></label>
              <input
                type="text"
                placeholder="Speaker"
                className="form-control form-control-lg"
                id="speaker"
                required
                value={seminar.speaker}
                onChange={handleInputChange}
                name="speaker"
              />
            </div>

            <div className="form-group">
              <label htmlFor="seminarDateTime"></label>
              <input
                type="text"
                placeholder="Date-Time"
                className="form-control form-control-lg"
                id="seminarDateTime"
                required
                value={seminar.seminarDateTime}
                onChange={handleInputChange}
                name="seminarDateTime"
              />
            </div>
            <div className="form-group">
              <label htmlFor="sits"></label>
              <input
                type="text"
                placeholder="Seats"
                className="form-control form-control-lg"
                id="sits"
                required
                value={seminar.sits}
                onChange={handleInputChange}
                name="sits"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description"></label>
              <input
                type="text"
                placeholder="Description"
                className="form-control form-control-lg"
                id="description"
                required
                value={seminar.description}
                onChange={handleInputChange}
                name="description"
              />
            </div>
            <MDBBtn
              color="success"
              onClick={saveSeminar}
              className="btn btn-success btn-lg"
            >
              Save Seminar
            </MDBBtn>
            {/*  <button onClick={saveSeminar} className="btn btn-success btn-lg saveBtn">Save Seminar</button> */}
            <MDBBtn
              href="/ListOfSem/"
              color="secondary"
              className="btn btn-warning btn-lg"
            >
              Back to Seminars
            </MDBBtn>
          </div>
        )}
      </div>
      <br/> 
    </div>
  );
};

export default AddSeminar;
