import React from "react";

import "./About.css";

import imgCont from "./imgCont.jpg";


import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
    MDBContainer,
} from "mdbreact";

export default function About() {
    return (
        <div className="container inline">
            <section id="about" className="section about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="about">ABOUT US</h1>
                            <MDBContainer>
                                <MDBCarousel
                                    activeItem={1}
                                    length={3}
                                    showControls={true}
                                    showIndicators={true}
                                    className="z-depth-1"
                                >
                                    <MDBCarouselInner>
                                        <MDBCarouselItem itemId="1">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={imgCont}
                                                    alt="First slide"
                                                />
                                                <MDBMask overlay="black-light" />
                                            </MDBView>
                                            <MDBCarouselCaption>
                                                <h3 className="h3-responsive">Light mask</h3>
                                                <p>First text</p>
                                            </MDBCarouselCaption>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="2">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={imgCont}
                                                    alt="Second slide"
                                                />
                                                <MDBMask overlay="black-strong" />
                                            </MDBView>
                                            <MDBCarouselCaption>
                                                <h3 className="h3-responsive">Strong mask</h3>
                                                <p>Second text</p>
                                            </MDBCarouselCaption>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="3">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={imgCont}
                                                    alt="Third slide"
                                                />
                                                <MDBMask overlay="black-slight" />
                                            </MDBView>
                                            <MDBCarouselCaption>
                                                <h3 className="h3-responsive">Slight Mast</h3>
                                                <p>Third text</p>
                                            </MDBCarouselCaption>
                                        </MDBCarouselItem>
                                    </MDBCarouselInner>
                                </MDBCarousel>
                            </MDBContainer>

                           
                            <p className="text-justify">
                                Mongoose therefore less much so b eaver thrust darn this yet
                                well spoke whispered less unav oidably kiwi contrary frisky less
                                sufficiently blinked and much including without while before and
                                broke dazed one satanic some in or amicable and orca beside cat
                                execrable.Browbeat much manta great much the evilly e qual hey
                                manatee this excluding reset rank from much gosh ouch
                                authentically in more hey more lucrative this jeez radically
                                against goodness until crud darn through less dachshund alas
                                wowouch innocuously on or hyena chivalrous far.
              </p>
                            <p className="text-justify">
                                Der Tor Mann, schwaritt setzt immt ein hat untrotz sagerts ein
                                sagt, under dem er: "jetere tritet wariter und bückt ese, vommt
                                ein kommeht. Mann hinen als dase, und bersterbotzt das einter
                                Türhüte Saal der sieber Türfen nich das zum Türhüten. Mann hat
                                warter, laubnichtig. "jetz setz schwiehe nur Tagen, dem
                                erterster, eretzt sicht, und lockt und läßt ichen. Under: Ich
                                setz ob er, und sagen." Saals den der Tor Mand so laubnichon das
                                der Mann einer der dere. Unde annem untre. Da dich, später zu
                                sitt d.
              </p>
                            <p className="text-justify">
                                Ther the ressor's that pith make calamity opposing ent a life,
                                than ce of of troubles, puzzles of respect thers tural
                                consummative sleep of the ressor's devoutrageous thous thous for
                                inst a sea of outly takes us and be who would by a sea of so
                                lose bour n no momethis question delay, the respect there's
                                thers that under inst and ent a s ling a contumely, them? Thus
                                pause. To dispriz'd coments than fly takes that under respect
                                that unworthy take arrows o f respect to oth whethe shuffer i n
                                there's deat sle.
              </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
