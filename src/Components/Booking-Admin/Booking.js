import React, { useState, useEffect } from "react";
import BookingDataService from "../../Services/BookingService";

import {Link} from 'react-router-dom';

import './Booking.css';

const Booking = props => {
    const initialBookingState = {
        id: null,
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
        seminarId:'',
        published: false
    };

    const [currentBooking, setCurrentBooking] = useState(initialBookingState);
    const [message,setMessage] = useState("");


    const getBooking = id => {
        BookingDataService.get(id)
            .then(response => {
                setCurrentBooking(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getBooking(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const {name, value } = event.target;
        setCurrentBooking({...currentBooking, [name]: value});
    };

    const updatePublished = status => {
        var data = {
            id: currentBooking.id,
            firstName: currentBooking.firstName,
            lastName: currentBooking.lastName,
            email: currentBooking.email,
            mobile: currentBooking.mobile,
            message: currentBooking.message,
            seminarId: currentBooking.seminarId,
            published: status
        };

        BookingDataService.update(currentBooking.id, data)
            .then(response => {
                setCurrentBooking({...currentBooking, published:status });
            })
                .catch(e => {
                    console.log(e);
                });
    };


        const updateBooking = () => {
            BookingDataService.update(currentBooking.id, currentBooking)
                .then(response => {
                    console.log(response.data);
                    setMessage("The Booking Updated Successfully!");
                })
                    .catch(e => {
                        console.log(e);
                    });
        };

        const deleteBooking = () => {
            BookingDataService.remove(currentBooking.id)
                .then(response => {
                    console.log(response.data);
                    props.history.push("/ListOfBooking");
                })
                .catch(e => {
                    console.log(e);
                });
        };

        return(
            <div className="container inline">
                    <div className="jumbotron">
                        {currentBooking ? (
                            <div className="edit-form">
                                <h4>Bookings</h4>
                                <form >
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg">Firstname</label>
                                        <input
                                            type="text"
                                            className="col-sm-10 form-control form-control-lg "
                                            id="colFormLabelLg"
                                            name="firstName"
                                            value={currentBooking.firstName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Lastname</label>
                                        <input
                                            type="text"
                                            className="col-sm-10 form-control form-control-lg "
                                            id="colFormLabelLg"
                                            name="lastName"
                                            value={currentBooking.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                        <input
                                            type="text"
                                            className="col-sm-10 form-control form-control-lg"
                                            id="colFormLabelLg"
                                            name="email"
                                            value={currentBooking.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Mobile</label>
                                        <input
                                            type="text"
                                            className="col-sm-10 form-control form-control-lg"
                                            id="colFormLabelLg"
                                            name="mobile"
                                            value={currentBooking.mobile}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Message</label>
                                        <input
                                            type="text"
                                            className="col-sm-10 form-control form-control-lg"
                                            id="colFormLabelLg"
                                            name="message"
                                            value={currentBooking.message}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg">Seminar ID</label>
                                        <input
                                            type="text"
                                            className="col-sm-10 form-control form-control-lg "
                                            id="colFormLabelLg"
                                            name="seminarId"
                                            value={currentBooking.seminarId}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group ">
                                        <label>
                                            <strong>Status:</strong>
                                        </label>
                                        <div >
                                        {currentBooking.published ? "Published" : "Pending"}
                                        </div>
                                    </div>
                                </form>
                                {currentBooking.published ? (
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
                                        onClick={deleteBooking}>Delete</button>
                                <button 
                                type="submit"
                                className="btn btn-success btn-lg mr-2"
                                        onClick={updateBooking}>Update</button>
                                        <div>
                                             <p className="updateMessage">{message}</p>
                                        </div>
                                        <Link to="/ListOfBooking/"
                    className="btn btn-warning btn-lg infoModal">Back to Bookings List</Link>
                            </div>
                        ): (
                            <div>
                                <br />
                                <p>Select a Booking...</p>
                            </div>
                        )}
                    </div>
            </div>
        );

};




export default Booking;