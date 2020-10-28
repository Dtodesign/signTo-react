import React from 'react';

import './Home.css';




import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle } from "mdbreact";


export default function Home() {
    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <h4 className="text text-center my-h4">Welcome to SignToSeminar for Healthy Life Style</h4>
                        <MDBJumbotron style={{ padding: 0 }}>
                            <MDBCol className="text-white text-center py-5 px-4 my-5 header-img">
                                <MDBCol className="py-5">
                                    <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold header-text">Herbal products are medicines derived from plants</MDBCardTitle>
                                    <p className="mx-5 mb-5 header-text-pp">
                                    </p>
                                    <p className="mx-5 mb-5 header-text-p">

                                        An yat cala silninquita, as lor nalanta etéraettul,
                                        tata ataqua aratar mi mir. Yalúmëa tellaurë sa qua.
                                        Né apa nírë silma. Handa goneheca má yav, pio cíla linta sí.
                                        Terca oment
                                    </p>
                        <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold"></MDBCardTitle>
                                    
                                    <MDBBtn  gradient="peach"
                                        size="lg"
                                        className="mb-5 homeBtn"
                                       
                                        href="/seminar/">
                                        <MDBIcon icon="leaf" className="mr-2">
                                        </MDBIcon>Check Our Seminars</MDBBtn>
                                </MDBCol>
                            </MDBCol>
                        </MDBJumbotron>
                        <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold"></MDBCardTitle>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
         
        </div>
    )
}


