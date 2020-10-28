import React from "react";

import "./Navbar.css";

export default function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <a className="navbar-brand " href="/">
          SignToSeminar
          </a>

        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle adminNav " href=" /" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Admin
        </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className=" dropdown-item nav-link  mr-auto " href="/ListOfSem">
              SeminarsList
              </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item nav-link dropdown-item mr-auto  " href="/add">
              AddSeminar
              </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item nav-link dropdown-item mr-auto  " href="/addBooking">
              AddBooking
              </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item nav-link dropdown-item mr-auto  " href="/ListOfBooking">
              BookingsList
              </a>
          </div>
        </div>





        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="/seminar">
              Seminars
              </a>
            <a className="nav-link" href="/about">
              About
              </a>
            <a
              className="nav-link"
              href="/contact"
              tabIndex="-1"
              aria-disabled="false"
            >
              Contact
              </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

