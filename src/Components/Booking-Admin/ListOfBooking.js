
import React, { useState, useEffect } from "react";
import BookingDataService from "../../Services/BookingService";
import { Link } from "react-router-dom";

import './ListOfBooking.css';

const ListOfBooking = () => {
    const [bookings, setBookings] = useState([]);
    const [currentBooking, setCurrentBooking] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);



    useEffect(() => {
        retrieveBookings();
    }, []);


    const retrieveBookings = () => {
        BookingDataService.getAll()
            .then(response => {
                setBookings(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveBookings();
        setCurrentBooking(null);
        setCurrentIndex(-1);
    };

    const setActiveBooking = (booking, index) => {
        setCurrentBooking(booking);
        setCurrentIndex(index);
    };

    const removeAllBookings = () => {
        BookingDataService.removeAll()
            .then(response => {
                console.log(response.data);
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="jumbotron text">
            <div className="list row">

                <div className="col-sm-6">
                    <h4>Booking List</h4>

                    <ul className="list-group">
                        {bookings && bookings.map((booking, index) => (
                            <li
                                className={
                                    "list-group-item  "
                                    + (index === currentIndex ? "active" : " ")
                                }
                                onClick={() => setActiveBooking(booking, index)}
                                key={index}><h5>{booking.firstName}   {booking.lastName}</h5> <br /> <small> Email : </small>{booking.email}
                                <br /><small> Mobile : </small>{booking.mobile} <br /> <small > Message : </small>{booking.message}
                               
                                </li>
                        ))}
                    </ul>
                    <div className="removeBtn">
                        <button className="m-3 btn btn-danger btn-lg "
                            onClick={removeAllBookings}> Remove All </button>
                    </div>
                </div>
                <div className="col-sm-6">
                    {currentBooking ? (
                        <div>
                            <h4>Booking</h4>
                            <br />
                            <div className="text-center">
                                <label >
                                    <strong>Firstname:</strong>
                                </label>{" "}
                                <div className="text text-center">
                                    {currentBooking.firstName}
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="text-center">
                                    <label>
                                        <strong>Lastname:</strong>
                                    </label>{" "}
                                    <div className="text text-center">
                                        {currentBooking.lastName}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="text-center">
                                    <label >
                                        <strong>Email:</strong>
                                    </label>{" "}
                                    <div className="text text-center">
                                        {currentBooking.email}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="text-center">
                                    <label>
                                        <strong>Mobile:</strong>
                                    </label>{" "}
                                    <div className="text text-center text-justify">
                                        {currentBooking.mobile}
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div>
                                <div className=" text-center">
                                    <label>
                                        <strong>Message:</strong>
                                    </label>{" "}
                                    <div className="text   text-center text-justify">
                                        {currentBooking.message}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className=" text-center">
                                    <label>
                                        <strong>Seminar ID:</strong>
                                    </label>{" "}
                                    <div className="text  text-center text-justify">
                                        {currentBooking.seminarId}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className=" text-center">
                                    <label>
                                        <strong>Status:</strong>
                                    </label>{" "}
                                    <div className="text   text-center text-justify">
                                        {currentBooking.published ? "Published" : "Pending"}
                                    </div>
                                </div>
                            </div>
                            <br />

                            <Link to={["/booking/"] + currentBooking.id}
                                className="btn btn-success btn-lg">Edit Booking
                            </Link>
                        </div>
                    ) : (

                            <div>
                                <br />
                                <p>Click on a Booking...</p>
                            </div>
                        )}

                </div>
            </div>
        </div>
    );

};
export default ListOfBooking;