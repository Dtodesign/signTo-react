
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
        <div className="container inline text">
            <br/>
            <br/>
            <br/>
            <div className="list row">

                <div className="col-md-6">
                    <br/>
                    <h2>Bookings List</h2>
                    <br/>
                    <br/>

                    <ul className="list-group">
                        {bookings && bookings.map((booking, index) => (
                            <li
                                className={
                                    "list-group-item  "
                                    + (index === currentIndex ? "active" : " ")
                                }
                                onClick={() => setActiveBooking(booking, index)}
                                key={index}><h6>{booking.firstName} {booking.lastName}</h6><strong> Email: </strong>{booking.email}
                                <br />{/* <strong> Mobile: </strong>{booking.mobile} <br /> <strong> Message: </strong>{booking.message} */}
                               
                                </li>
                        ))}
                    </ul>
                    <div className="removeBtn">
                        <button className="m-3 btn btn-danger btn-lg "
                            onClick={removeAllBookings}> Remove All </button>
                    </div>
                </div>
                <div className="col-md-6">
                    {currentBooking ? (
                        <div>
                                <br />
                                <h2>Booking</h2>
                            <br />
                            <br />

                            <div className="text-center">
                                <h5>
                                   FullName: {currentBooking.firstName} {currentBooking.lastName}
                                </h5>
                            </div>
                            <br />
                           
                            <div>
                                <div className="text-center">
                                    <h5>
                                        <strong>Email:</strong>  {currentBooking.email}
                                    </h5>
                                    
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="text-center">
                                    <h5>
                                        <strong>Mobile:</strong> {currentBooking.mobile}
                                    </h5>
                                    
                                </div>
                            </div>
                            <br />

                            <div>
                                <div className=" text-center">
                                    <h5>
                                        <strong>Message:</strong> {currentBooking.message}
                                    </h5>
                                    
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className=" text-center">
                                    <h5>
                                        <strong>Seminar ID:</strong> {currentBooking.seminarId}
                                    </h5>
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className=" text-center">
                                    <h5>
                                        <strong>Status:</strong>  {currentBooking.published ? "Published" : "Pending"}
                                    </h5>{" "}
                                    
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
                                <br />
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