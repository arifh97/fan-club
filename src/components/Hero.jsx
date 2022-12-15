import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Hero() {
    const [countdownDate] = useState(new Date('1/1/2023').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);
    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();
            const distanceToDate = countdownDate - currentTime;
            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }
            setState({ days: days, hours: hours, minutes, seconds });
        }
    };
    return (
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