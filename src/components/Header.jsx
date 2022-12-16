import React from "react";
import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SiteLogo from '../assets/img/logo.png';

function Header ()  {
    return(
        <header className="heading"  sticky="top">
             <Navbar colnpmlapseOnSelect expand="lg"  variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={SiteLogo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About us</Nav.Link>
                        <Nav.Link href="#pricing">Nfts</Nav.Link>
                        <Nav.Link href="#pricing">Roadmap</Nav.Link>
                        <Nav.Link href="#pricing">Faqs</Nav.Link>
                    </Nav>
                    <div className="header_right">
                        <Nav.Link href="#deets" className="boxed-btn">Join Discord</Nav.Link>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;