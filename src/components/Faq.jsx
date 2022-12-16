import React, {useEffect} from 'react'
import {Container, Row, Col} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import AOS from "aos";
import ArrowDwon from "../assets/img/57.png";
import QuoteImg from "../assets/img/quote.png";
import Faq_Data from '../utils/FaqData'

function Faq ()  {
    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, []);
    return(
        <div className="faq-area" id='faq'>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} className="text-center">
                        <div className="arrow_down" data-aos="fade-down" data-aos-duration="1000">
                            <figure>
                                <img src={ArrowDwon} alt="" />
                            </figure>
                        </div>
                        <div className="section-title">
                            <h3 className='mb-4 mb-lg-5' data-aos="fade-up" data-aos-duration="1100">A Sports collection built with utility and <span className="text-primary d-md-block">community at its foundation</span></h3>
                            <p data-aos="fade-up" data-aos-duration="1200">Once inside, you will have exclusive access to FAFC related drops, meetups and IRL events, and access to upcoming projects!</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="0"  data-aos="fade-up" data-aos-duration="1300">
                        {
                            Faq_Data.map((el, i) => {
                            return (
                                <Accordion.Item eventKey={`${i}`} key={i}>
                                <Accordion.Header>{el.title}</Accordion.Header>
                                <Accordion.Body dangerouslySetInnerHTML={{__html: el.body}}>
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
                        <div className="faq-area-quote bg-primary" data-aos="fade-up" data-aos-duration="1400">
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