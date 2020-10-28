import React, { useState, useEffect } from "react";
import BookingDataService from "../../Services/BookingService";
import SeminarDataService from "../../Services/SeminarService";

import { Link } from "react-router-dom";

const SeminarRegister = (props) => {
    const initialBookingState = {
        id: null,
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",  
        published: false
    };
    const initialSeminarState = {
        id: null,
        title: ''
    };

    const [currentSeminar, setCurrentSeminar] = useState(initialSeminarState);
    const [booking, setBooking] = useState(initialBookingState);
    const [submitted, setSubmitted] = useState(false);


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
        const{name , value } = event.target;
        setBooking({...booking, [name]: value});
    };

    const saveBooking = () => {
        var data = {
            firstName: booking.firstName,
            lastName: booking.lastName,
            email: booking.email,
            mobile: booking.mobile,
            message: booking.message,
            seminarId: currentSeminar.id
           
        };

        BookingDataService.create(data)
            .then(response => {
                setBooking({
                    id: response.data.id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    mobile: response.data.mobile,
                    message: response.data.message,
                   
                    published: response.data.published
                });
                setSubmitted(true);
                console.log(response.data);
               /*  props.history.push("/seminar"); */
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newBooking = () => {
        setBooking(initialBookingState);
        setSubmitted(false);
    };

    return(
        <div >
        <div className="submit-form jumbotron">

            {submitted ? (
                <div>
                    <h4>Successful Submit!</h4>
                    <Link className="btn btn-success btn-lg" onClick={newBooking}>Add Booking</Link>
                    <Link to="/seminar/"
                    className="btn btn-warning btn-lg infoModal">Back to Seminars</Link>
                </div>
            ) : (
                <div className="col-md-12">
                    
                <div>
                    <p> <strong>ID :</strong> {currentSeminar.id}</p>
                </div>
                <div>
                    <p> <strong>Speaker :</strong> {currentSeminar.speaker}</p>
                </div>
                <div>
                    <p> <strong>Seminar Title : </strong> {currentSeminar.title}</p>
                </div>
                <div className="form-group ">
                    <label htmlFor="firstName"></label>
                    <input 
                            type="text"
                            placeholder="Firstname"
                            className="form-control form-control-lg"
                            id="firstName"
                            required
                            value={booking.firstName}
                            onChange={handleInputChange}
                            name="firstName"
                    />
                </div>

                <div className="form-group">
                <label htmlFor="lastName"></label>
                <input 
                        type="text"
                        placeholder="Lastname"
                        className="form-control form-control-lg"
                        id="lastName"
                        required
                        value={booking.lastName}
                        onChange={handleInputChange}
                        name="lastName"
                />
                </div>
                
                <div className="form-group">
                <label htmlFor="email"></label>
                <input 
                        type="email"
                        placeholder="Email"
                        className="form-control form-control-lg"
                        id="email"
                        required
                        value={booking.email}
                        onChange={handleInputChange}
                        name="email"
                />
                </div>
                <div className="form-group">
                <label htmlFor="mobile"></label>
                <input 
                        type="text"
                        placeholder="Mobile"
                        className="form-control form-control-lg"
                        id="mobile"
                        required
                        value={booking.mobile}
                        onChange={handleInputChange}
                        name="mobile"
                />
                </div>
                <div className="form-group">
                <label htmlFor="message"></label>
                <input 
                        type="text"
                        placeholder="Message"
                        className="form-control form-control-lg"
                        id="message"
                        required
                        value={booking.message}
                        onChange={handleInputChange}
                        name="message"
                />
                </div>
              

                
               <Link onClick={saveBooking} className="btn btn-success btn-lg">Register for Seminar</Link>
               <Link to="/seminar/"
                    className="btn btn-warning btn-lg infoModal">Back to Seminars</Link>
                </div>
            )}

        </div>
        </div>

    );
    };


export default SeminarRegister;