import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function Header ()  {
    return(
        <header className="heading">
            <Container>
                <Row>
                    <Col md={2}>
                        
                    </Col>
                    <Col md={10}></Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;