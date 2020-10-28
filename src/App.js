import React, { Component } from 'react';


import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

import SeminarList from './Components/Seminar/SeminarList';
import AddSeminar from '../src/Components/Seminar-Admin/AddSeminar';
import ListOfSeminars from '../src/Components/Seminar-Admin/ListOfSeminars';
import Seminar from '../src/Components/Seminar-Admin/Seminar';
import AddBooking from './Components/Booking-Admin/AddBooking';
import ListOfBooking from './Components/Booking-Admin/ListOfBooking';
import Booking from './Components/Booking-Admin/Booking';
import SeminarRegister from './Components/Seminar/SeminarRegister';
import SeminarInfo from './Components/Seminar/SeminarInfo';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router className="App">
          <Navbar />
         
          <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/add' component={AddSeminar} />
            <Route  path='/ListOfSem' component={ListOfSeminars} />
            <Route  path='/ListOfBooking' component={ListOfBooking} />
            <Route  path='/seminars/:id' component={Seminar} />
            <Route  path='/booking/:id' component={Booking} />
            <Route path='/addBooking' component={AddBooking} />
            <Route path='/semReg/:id' component={SeminarRegister} />
            <Route path='/semInfo/:id' component={SeminarInfo} />
            <Route path='/seminar' component={SeminarList} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </Router>

      </div>
    );
  }
}

