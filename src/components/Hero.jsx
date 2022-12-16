import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Hero() {
    const [countdownDate] = useState(new Date('Dec 16, 2022 20:30:00').getTime());
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
                                <div className="count_down_numbers">
                                    <div className="single_items day">
                                        <h3>{state.days > 0 ? state.days : '0'}</h3>
                                        <span>Days</span>
                                    </div>
                                    <div className="single_items hours">
                                        <h3>{state.hours > 0 ? state.hours : '00'}</h3>
                                        <span>Hours</span>
                                    </div>
                                    <div className="single_items mins">
                                        <h3>{state.minutes > 0 ? state.minutes : '00'}</h3>
                                        <span>Minutes</span>
                                    </div>
                                    <div className="single_items secounds">
                                        <h3>{state.seconds> 0 ? state.seconds : '00'}</h3>
                                        <span>Secounds</span>
                                    </div>
                                </div>
                                <div className="countdown_box_bottom">
                                    <span className="experience">Instead of More than 10 Years of experience. Put Football Ape Fan Club Phase I Mint Starts Today @ 13:30 UTC!</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;