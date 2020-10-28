import React, { useState, useEffect } from "react";
import SeminarDataService from "../../Services/SeminarService";

import { Link } from "react-router-dom";

import imgInfo from './imgAbout02.jpg';


import './SeminarInfo.css';

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





    return (
        <div className="container inline">
            <div className="col-md-12">
                <div className="text text-center">
                    <h1>SEMINAR DETAILS</h1>
                </div>
            </div>
            <div className="container-fluid jumbotron info">

                <div className="col-md-6 float-left">
                    <img src={imgInfo} alt={imgInfo} className="img-responsive imgInfo" />
                </div>

                <div className="col-md-6 float-right">

                    <p className="text justify-content"> <strong>Seminar Title :</strong><br/>{currentSeminar.title}</p>

                </div>

                <div className="col-md-6 float-right">

                    <p className="text justify-content"><strong>Speaker : </strong>{currentSeminar.speaker}</p>
                </div>
                <div className="col-md-6 float-right">

                    <p className="text justify-content"> <strong>Date-Time : </strong> {currentSeminar.seminarDateTime}</p>
                </div>
                <div className=" col-md-12 float-right">

                    <p className="text justify-content"><strong>Description : </strong> {currentSeminar.description}</p>
                </div>



                <Link to="/seminar/"
                    className="btn btn-warning btn-lg infoModal">Back</Link>
                <Link to={["/semReg/"] + currentSeminar.id}
                    className="btn btn-success btn-lg infoModal">Register</Link>


            </div>
        </div>
    )
};




export default Seminar;