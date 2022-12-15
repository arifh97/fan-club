import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import ArrowDwon from "../assets/img/57.png";
import QuoteImg from "../assets/img/quote.png";
import Faq_Data from '../utils/FaqData'

function Faq ()  {
    return(
        <div className="faq-area">
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                        <div className="arrow_down">
                            <figure>
                                <img src={ArrowDwon} alt="" />
                            </figure>
                        </div>
                        <div className="section-title">
                            <h5>A Sports collection built with utility and community at its foundation</h5>
                            <p>Once inside, you will have exclusive access to FAFC related drops, meetups and IRL events, and access to upcoming projects!</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="0">
                        {
                            Faq_Data.map((el, i) => {
                            return (
                                <Accordion.Item eventKey={`${i}`} key={i}>
                                <Accordion.Header>{el.title}</Accordion.Header>
                                <Accordion.Body>
                                    <p>{el.body}</p>
                                </Accordion.Body>
                                </Accordion.Item>
                            )
                            })
                        }
                        </Accordion>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="quote_cta_area">
                            <img src={QuoteImg} alt="" />
                            <h3>Football is not just a game, but an emotion for billion of people!</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Faq;