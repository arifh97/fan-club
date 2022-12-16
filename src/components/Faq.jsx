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
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} className="text-center">
                        <div className="arrow_down">
                            <figure>
                                <img src={ArrowDwon} alt="" />
                            </figure>
                        </div>
                        <div className="section-title">
                            <h3 className='mb-4 mb-lg-5'>A Sports collection built with utility and <span className="text-primary d-md-block">community at its foundation</span></h3>
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
                        <div className="faq-area-quote bg-primary">
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