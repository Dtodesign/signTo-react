import React from 'react';
import { MDBBtn } from "mdbreact";

import './Contact.css';

import imgcontact from './img-contact.jpg';

export default function Contact() {
    return (
        <div>
             <section id="contact" className="section contact ">
        <div className="container" >
            <div className="row">
                <div className="text-center">
                    <img alt="" className="img-responsive img-contact" src={imgcontact} />
                </div>
                <div className="col-sm-3">
                        <div className="adress" >
                        <p> <strong>Our Address:</strong> <br/><br/>SignToSeminar<br/>The L Street<br/>
                                Building # 088, Road #467<br/> <strong>Phone:</strong> +33 588 44 22<br/>
                                <strong>Email:</strong> support@sts.com</p>
                        </div>
                </div>
                <div className="col-sm-9">
                    <div className="row" >
                        <div className="col-sm-6 form-group">
                            <input type="text" className="form-control" id="contact-name" name="name"
                                placeholder="Your Name ..." />
                            <span className='error-message' id='name-error'></span>
                        </div>
                        <div className="col-sm-6">
                            <input type="email" className="form-control mail" id="contact-email" name="email"
                                placeholder="Your Email" />
                            <span className='error-message' id='email-error'></span>
                        </div>

                    </div>
                    <textarea className="form-control" rows="6" id='contact-message' name='message'
                        placeholder="How Can We Help? We will get in touch with you shortly."
                        ></textarea>
                    <span className='error-message' id='message-error'></span>
                   
                    <div className="row">
                        <div className="col-sm-12 form-group">
                        <MDBBtn rounded  gradient="peach" size="lg">Send</MDBBtn>
                          
                            <span className='error-message' id='submit-error'></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}
