import React, { useState } from "react";
import BookingDataService from "../../Services/BookingService";


import './AddBooking.css';

const AddBooking = () => {
    const initialBookingState = {
        id: null,
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
        seminarId: "",
        published: false
    };

    
    const [booking, setBooking] = useState(initialBookingState);
    const [submitted, setSubmitted] = useState(false);

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
            seminarId: booking.seminarId
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
                    seminarId: response.data.seminarId,
                    published: response.data.published
                });
                setSubmitted(true);
                console.log(response.data);
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
        <div className="container myPage">
            <br/>
             <div>
                    <h2 className="text">Add Booking Page - Admin</h2>
                    
                </div>
            <br/>

        <div className="col-md-12 jumbotron-book">

            {submitted ? (
                <div>
                    <h4>Successful Submit!</h4>
                    <button className="btn btn-success" onClick={newBooking}>Add Booking</button>
                </div>
            ) : (
                <div className="col-md-12">
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
                <div className="form-group">
                <label htmlFor="seminarId"></label>
                <input 
                        type="text"
                        placeholder="Seminar ID"
                        className="form-control form-control-lg"
                        id="email"
                        required
                        value={booking.seminarId}
                        onChange={handleInputChange}
                        name="seminarId"
                />
                </div>
               <button onClick={saveBooking} className="btn btn-success btn-lg saveBtn">Save Booking</button>
                </div>
            )}

        </div>
        <br/>

        </div>
        

    );
    };


export default AddBooking;