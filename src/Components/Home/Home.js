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
                                    <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold header-text"> "Herbal products are medicines derived from plants"</MDBCardTitle>
                                    <p className="mx-5 mb-5 header-text-pp">
                                    </p>
                                    <p className="mx-5 mb-5 header-text-p">

                                        An yat cala silninquita, as lor nalanta etéraettul,
                                        tata ataqua aratar mi mir. Yalúmëa tellaurë sa qua.
                                        Né apa nírë silma. Handa goneheca má yav, pio cíla linta sí.
                                        Terca omentië ta nén.barmetta up, uë aro aqua onótima, yá heru yelma etelotya foa. En vi
                                        ë lingwë ettelen, ai occo felmë toa. Má not palmë tasar hravan, rá yulmë vilya
                                    </p>
                                    <MDBBtn  gradient="peach"
                                        size="lg"
                                        className="mb-5 homeBtn"
                                       
                                        href="/seminar/">
                                        <MDBIcon icon="leaf" className="mr-2">
                                        </MDBIcon>Check Our Seminars</MDBBtn>
                                </MDBCol>
                            </MDBCol>
                        </MDBJumbotron>
                        <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold header-text"></MDBCardTitle>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
         
        </div>
    )
}


/*
<MDBContainer className="mt-5 text-center myHeader">
className="young-passion-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1-half"
<MDBRow>
    <MDBCol>
        <MDBJumbotron className="p-0">
            <MDBCardImage
                className="img-fluid"
                src={headerImg}
            />
            <MDBCardBody>
                <MDBCardTitle className="h3"></MDBCardTitle>
                <MDBCardText>
                    "Herbal products are medicines derived from plants"
                </MDBCardText>
                <MDBBtn href="#" gradient="purple" rounded>
                    Go to Seminars
                     </MDBBtn>
            </MDBCardBody>
        </MDBJumbotron>
    </MDBCol>
</MDBRow>
</MDBContainer> */

/*  <div className="container-fluid bg-1 text-center">
                <h3 className="margin"></h3>

                <img src={headerImg} className="img-responsive headerImg" alt="Bird" />
                <h3 className="margin">"Herbal products are medicines derived from plants"</h3>
            </div> */