
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
        <div className="container text">
            <br/>
            <br/>
            <div className="container">
                <Search />
                </div>
        <div className="container ">
            <div className="list row">
 
                <div className="col-md-6 ">
                    <br />
                    <h4><strong>Seminars List </strong></h4>
                    <br />
                    <div className="container">
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
                    </div>
                    <div className="removeBtn">
                        <button className="m-3 btn btn-danger btn-lg "
                            onClick={removeAllSeminars}> Remove All </button>
                    </div>
                </div>
                
                <div className="col-md-6 text">
                    {currentSeminar ? (
                     

                        <div>
                           
                           <br />
                            <br />
                            <br />
                            <br />
                            <div className="text-center">
                                <h5 >
                                    <strong>TITLE: </strong> {currentSeminar.title}
                                </h5>
                            </div> 
                            <br />
                            <div>
                                <div className="text-center">
                                    <h5>
                                        <strong>SPEAKER: </strong> {currentSeminar.speaker}
                                    </h5>
                                    
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="text-center">
                                    <h5>
                                        <strong>DESCRIPTION:  </strong> {currentSeminar.description}
                                    </h5>
                                   
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="text-center">
                                    <h5>
                                        <strong>DATE-TIME:</strong>  {currentSeminar.seminarDateTime}
                                    </h5>
                                </div>
                            </div>
                            <br />

                            <div>
                                <div className="text-center">
                                    <h5>
                                        <strong>Status:</strong>  {currentSeminar.published ? "Published" : "Pending"}
                                    </h5>
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