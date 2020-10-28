import React from 'react';
import { MDBIcon, MDBContainer, MDBFooter } from "mdbreact";


import './Footer.css';

export default function Footer() {
    return (
        <div>

            <MDBFooter color="blue" className="font-small pt-4 mt-4 my-footer">
            <MDBContainer className="myIcons">
                <a href="/" className="fb-ic mr-3">
                    <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="/"  className="ins-ic mr-3">
                    <MDBIcon fab icon="instagram" />
                </a>
                <a href="/"  className="tw-ic mr-3">
                    <MDBIcon fab icon="twitter" />
                </a>
                <a href="/"  className="so-ic mr-3">
                    <MDBIcon fab icon="stack-overflow" />
                </a>
                <a href="/"  className="slack-ic mr-3">
                    <MDBIcon fab icon="slack" />
                </a>
                <a href="/"  className="git-ic mr-3">
                    <MDBIcon fab icon="github" />
                </a>
                </MDBContainer>
                <div className="footer-copyright text-center py-3 dgWeb">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright <a href="/"> dgWebCrew</a>
                    </MDBContainer>
                </div>
            </MDBFooter>

        </div>
    )
}
