
import React, { useState, useEffect } from "react";
import SeminarDataService from "../../Services/SeminarService";
import { Link } from "react-router-dom";

import './ListOfSeminar.css';
import Search from "../Search/Search";

const ListOfSeminar = () => {
    const [seminars, setSeminars] = useState([]);
    const [currentSeminar, setCurrentSeminar] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    


    useEffect(() => {
        retrieveSeminars();
    }, []);

    

    const retrieveSeminars = () => {
        SeminarDataService.getAll()
            .then(response => {
                setSeminars(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveSeminars();
        setCurrentSeminar(null);
        setCurrentIndex(-1);
    };

    const setActiveSeminar = (seminar, index) => {
        setCurrentSeminar(seminar);
        setCurrentIndex(index);
    };

    const removeAllSeminars = () => {
        SeminarDataService.removeAll()
            .then(response => {
                console.log(response.data);
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    };

    

    return (
        <div>
                <Search />
        
        <div className="jumbotron">
            <div className="list row">
 
                <div className="col-md-6 ">
                    <h4>Seminars List</h4>

                    <ul className="list-group ">
                        {seminars && seminars.map((seminar, index) => (
                            <li
                                className={
                                    "list-group-item "
                                    + (index === currentIndex ? "active" : " ")
                                }
                                onClick={() => setActiveSeminar(seminar, index)}
                                key={index}>{seminar.title} </li>
                        ))}
                    </ul>
                    <div className="removeBtn">
                        <button className="m-3 btn btn-danger btn-lg "
                            onClick={removeAllSeminars}> Remove All </button>
                    </div>
                </div>
                <div className="col-md-6 ">
                    {currentSeminar ? (
                        <div>
                            <h4>Seminar</h4>
                            <br />
                            <div className="text-left">
                                <label >
                                    <strong>Title:</strong>
                                </label>{" "}
                                <div className="text text-justify">
                                    {currentSeminar.title}
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="text-left">
                                    <label>
                                        <strong>Speaker:</strong>
                                    </label>{" "}
                                    <div className="text text-justify">
                                        {currentSeminar.speaker}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="text-left">
                                    <label >
                                        <strong>Description:</strong>
                                    </label>{" "}
                                    <div className="text text-justify">
                                        {currentSeminar.description}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="text-left">
                                    <label>
                                        <strong>Date-Time:</strong>
                                    </label>{" "}
                                    <div className="text text-justify">
                                        {currentSeminar.seminarDateTime}
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div>
                                <div className="text-left">
                                    <label>
                                        <strong>Status:</strong>
                                    </label>{" "}
                                    <div className="text text-justify">
                                        {currentSeminar.published ? "Published" : "Pending"}
                                    </div>
                                </div>
                            </div>
                            <br />

                            <Link to={["/seminars/"] + currentSeminar.id}
                                className="btn btn-success btn-lg">Edit Seminar
                            </Link>
                        </div>
                    ) : (

                            <div>
                                <br />
                                <p>Click on a Seminar...</p>
                            </div>
                        )}

                </div>
            </div>
        </div>
        </div>
    );

};
export default ListOfSeminar;