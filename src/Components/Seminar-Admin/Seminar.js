import React, { useState, useEffect } from "react";
import SeminarDataService from "../../Services/SeminarService";
import {Link} from 'react-router-dom';

import './Seminar.css';

const Seminar = props => {
    const initialSeminarState = {
        id: null,
        title: "",
        speaker: "",
        seminarDateTime: "",
        sits: "",
        description: "",
        published: false
    };

    const [currentSeminar, setCurrentSeminar] = useState(initialSeminarState);
    const [message,setMessage] = useState("");


    const getSeminar = id => {
        SeminarDataService.get(id)
            .then(response => {
                setCurrentSeminar(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getSeminar(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const {name, value } = event.target;
        setCurrentSeminar({...currentSeminar, [name]: value});
    };

    const updatePublished = status => {
        var data = {
            id: currentSeminar.id,
            title: currentSeminar.title,
            speaker: currentSeminar.speaker,
            seminarDateTime: currentSeminar.seminarDateTime,
            sits: currentSeminar.sits,
            description: currentSeminar.description,
            published: status
        };

        SeminarDataService.update(currentSeminar.id, data)
            .then(response => {
                setCurrentSeminar({...currentSeminar, published:status });
            })
                .catch(e => {
                    console.log(e);
                });
    };


        const updateSeminar = () => {
            SeminarDataService.update(currentSeminar.id, currentSeminar)
                .then(response => {
                    console.log(response.data);
                    setMessage("Seminar Updated Successfully!");
                })
                    .catch(e => {
                        console.log(e);
                    });
        };

        const deleteSeminar = () => {
            SeminarDataService.remove(currentSeminar.id)
                .then(response => {
                    console.log(response.data);
                    props.history.push("/ListOfSem");
                })
                .catch(e => {
                    console.log(e);
                });
        };

        return(
            <div className="container inline">
                    <div className="jumbotron">
                        {currentSeminar ? (
                            <div className="edit-form">
                                <h4>Seminars</h4>
                                <form >
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg">Title</label>
                                        <input
                                            type="text"
                                            className="col-sm-10 form-control form-control-lg "
                                            id="colFormLabelLg"
                                            name="title"
                                            value={currentSeminar.title}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Speaker</label>
                                        <input
                                            type="text"
                                            className="col-sm-10 form-control form-control-lg "
                                            id="colFormLabelLg"
                                            name="Speaker"
                                            value={currentSeminar.speaker}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Date-Time</label>
                                        <input
                                            type="text"
                                            className="col-sm-10 form-control form-control-lg"
                                            id="colFormLabelLg"
                                            name="seminarDateTime"
                                            value={currentSeminar.seminarDateTime}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">seats</label>
                                        <input
                                            type="text"
                                            className="col-sm-10 form-control form-control-lg"
                                            id="colFormLabelLg"
                                            name="sits"
                                            value={currentSeminar.sits}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Description</label>
                                        <input
                                            type="text"
                                            className="col-sm-10 form-control form-control-lg"
                                            id="colFormLabelLg"
                                            name="description"
                                            value={currentSeminar.description}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group ">
                                        <label>
                                            <strong>Status:</strong>
                                        </label>
                                        <div >
                                        {currentSeminar.published ? "Published" : "Pending"}
                                        </div>
                                    </div>
                                </form>
                                {currentSeminar.published ? (
                                    <button
                                        className="btn btn-secondary btn-lg mr-2"
                                        onClick={() => updatePublished(false)}
                                    >UnPublish</button>
                                ): (
                                    <button
                                        className="btn btn-secondary btn-lg mr-2"
                                        onClick={() => updatePublished(true)}
                                    >Publish</button>
                                )}
                                <button className="btn btn-danger btn-lg mr-2"
                                        onClick={deleteSeminar}>Delete</button>
                                <button 
                                type="submit"
                                className="btn btn-success btn-lg mr-2"
                                        onClick={updateSeminar}>Update</button>
                                        <div>
                                             <p className="updateMessage">{message}</p>
                                        </div>
                                        <Link to="/ListOfSem/"
                    className="btn btn-warning btn-lg infoModal">Back to Semianrs</Link>
                            </div>
                        ): (
                            <div>
                                <br />
                                <p>Select a Seminar...</p>
                            </div>
                        )}
                    </div>
            </div>
        );

};




export default Seminar;