import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function Hero ()  {
    return(
        <div className="hero-area">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="hero-content-left">
                            <span>Welcome to the</span>
                            <h1>Football Ape Fan Club (FAFC)</h1>
                            <p><b>“The Football World Cup”</b> is one of the most anticipated sporting events in the world, and we are incredibly excited to announce launch of Football Ape Fan Club. We are launching collection consisting of <b>7,910 NFTs.</b> Our collection is inspired by our legendary footballers of all time.</p>
                            <a href="/" className="boxed-btn">Join Discord</a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="hero-content-right">
                            <div className="count_down_box_hook"></div>
                            <div className="conut_down_box">
                                <h3>Phase I Mint Starts In</h3>
                                <span>Phase I Mint Starts In</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;