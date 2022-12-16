import React, {useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import ArrowDwonRightAngle from "../assets/img/arrow_down_right.png";
import { progress_data } from "../utils/ProgressItems";
import AOS from "aos";
import "aos/dist/aos.css";
function ApeFunProgress ()  {
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <div className="progress_section" id="roadmap">
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="arrow_down" data-aos="fade-up" data-aos-duration="800">
                            <figure>
                                <img src={ArrowDwonRightAngle} alt="" />
                            </figure>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="progress_section_content">
                          <h2 data-aos="fade-up" data-aos-duration="900">What Is Football <span className="text-primary">Ape Fan Club?</span></h2>
                          <p data-aos="fade-up" data-aos-duration="950">A NFT collection consisting of <strong>7,910 NFTs</strong> on the Ethereum blockchain. There are numerous benefits to owning a Football Ape Fan Club NFT. By owning a Football Ape Fan Club NFT</p>
                          <div className="supply_price d-flex align-items-center">
                            <div className="supply_item" data-aos="fade-up" data-aos-duration="900">
                                <span>SUPPLY</span>
                                <h3>7,910</h3>
                            </div>
                            <div className="supply_item price"  data-aos="fade-up" data-aos-duration="1000">
                                <span>PRICE</span>
                                <h3>O.04ETH <span>(First Phase)</span></h3>
                            </div>
                          </div>
                          <div data-aos="fade-up" data-aos-duration="1100">
                            <a href="https://mint.footballapefanclub.com/" className="boxed-btn yellow">Buy FAFC</a>
                          </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="progress_section_right" data-aos="fade-up" data-aos-duration="1100">
                            {
                                progress_data.map((el, i) => {
                                return(
                                    <div className="progress_single_items" key={i}>
                                        <span className="text-primary d-block">{el.phase_title}</span>
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