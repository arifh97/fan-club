import React from "react";
import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SiteLogo from '../assets/img/logo.png';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Header ()  {
    return(
        <header className="heading">
             <Navbar colnpmlapseOnSelect expand="lg"  variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={SiteLogo} alt="" /></Navbar.Brand>
                    <div className="social_icons">
                        <a href="https://twitter.com/FootballApeFC"><FaTwitter /></a>
                        <a href="https://discord.gg/JNkSPf2Ktm"><FaDiscord /></a>
                        <a href="https://www.instagram.com/FootballApeFanClub/"><FaInstagram /></a>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About us</Nav.Link>
                        <Nav.Link href="#nfts">Nfts</Nav.Link>
                        <Nav.Link href="#roadmap">Roadmap</Nav.Link>
                        <Nav.Link href="#faq">Faqs</Nav.Link>
                    </Nav>
                    <div className="header_right">
                        <Nav.Link href="https://discord.gg/JNkSPf2Ktm" className="boxed-btn mt-0">Join Discord</Nav.Link>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;