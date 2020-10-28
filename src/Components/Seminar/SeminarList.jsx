import React, { useState, useEffect } from "react";
import SeminarDataService from "../../Services/SeminarService";
import { Link } from "react-router-dom";


import imgSem04 from './imgSem04.jpg';
import './SeminarList.css';
import Search from "../Search/Search";

const SeminarList = () => {
    

    const [seminars, setSeminars] = useState([]);
    

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

   

    return (
        <div>
            <div className="text-center">
                <h2 className="text">UPCOMING SEMINARS</h2>
            </div>
            <div>
                <Search />
                <br />
                <br />
            </div>
            <br />


           

            <div className="container ">



                <div className="row row-cols-1 row-cols-sm-3">
                    {seminars && seminars.map((seminar) => (


                        <div className="row  align-item-start">
                            <div className="col">
                                <img src={imgSem04} alt={imgSem04} className="img-circle" />
                                <div className="col-md-12">
                                <div className="col-md-12">
                                    <p><strong>{seminar.speaker}</strong></p>
                                    </div>
                                    <div className="col-md-12">
                                    <p>{seminar.title}</p>
                                    </div>
                                    <div className="col-md-12">
                                    <p>{seminar.seminarDateTime}</p>
                                    </div>


                                </div>

                                <div className="sem-footer">


                                    <Link to={["/semReg/"] + seminar.id}
                                        className="btn btn-lg bookModal">Register
                                    </Link>

                                    <Link to={["/semInfo/"] + seminar.id}
                                        className="btn btn-lg ">Details
                                    </Link>
                                    
                                    

                                </div>
                            </div>

                        </div>


                    ))}
                </div>

            </div>

        </div>
    )

}

export default SeminarList;