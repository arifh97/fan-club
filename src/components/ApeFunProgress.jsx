import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import ArrowDwonRightAngle from "../assets/img/arrow_down_right.png";
import { progress_data } from "../utils/ProgressItems";
function ApeFunProgress ()  {
    return(
        <div className="fun_club_progress_section">
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="arrow_down_left_angle">
                            <figure>
                                <img src={ArrowDwonRightAngle} alt="" />
                            </figure>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="fafc_content_left">
                          <h2>What Is Football <span>Ape Fan Club?</span></h2>
                          <p>A NFT collection consisting of 7,910 NFTs on the Ethereum blockchain. There are numerous benefits to owning a Football Ape Fan Club NFT. By owning a Football Ape Fan Club NFT</p>
                          <div className="supply_price">
                            <div className="item supply">
                                <span>SUPPLY</span>
                                <h3>7,910</h3>
                            </div>
                            <div className="item price">
                                <span>PRICE</span>
                                <h3>O.04ETH <span>(First Phase)</span></h3>
                            </div>
                          </div>
                          <a href="/" className="boxed-btn">Buy FAFC</a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="progress_section_right">
                            {
                                progress_data.map((el, i) => {
                                return(
                                    <div className="progress_single_items" key={i}>
                                        <span className="phase_title">{el.phase_title}</span>
                                        <h4>{el.progress_title}</h4>
                                        
                                        <ProgressBar now={el.progress_grow_point} />
                                    </div>
                                    )
                                })
                            }

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ApeFunProgress;