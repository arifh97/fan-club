import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import SiteLogo from '../assets/img/footer-logo.svg';
import FooterarrowShap from '../assets/img/5.png';
import FooterIcon from '../assets/img/footer-icon.svg';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer ()  {
    return(
        <footer className="footer_area">
             <Container>
                <div className="arrow_down">
                    <figure>
                        <img src={FooterarrowShap} alt="" />
                    </figure>
                </div>
                <Row className="justify-content-center">
                    <Col lg='10'>
                        <div className="footer_top_content">
                            <h4>Football Ape Fan Club NFT Holder Tier Reward System</h4> 
                            <p>Holders with three or more Football Ape Fan Club NFTs will be eligible for an exclusive giveaway of 79 Football Ape Fan Club NFTs <a href="/" className="text-primary text-decoration-underline">(1 FAFC NFT per Holder)</a> to 79 Holders!</p>
                            <p>The top <a href="/" className="text-primary text-decoration-underline">9 Football Ape Fan Club NFT</a> holders will be able to work closely with the Football Ape Fan Club Team and our metaverse development team. These 9 holders will get priority updates and have exclusive discord in-chat access with Football Ape Fan Club founders. It’s Your Ticket to Elite-Level Networking Events with Business Leaders, Entrepreneurs. On the contingency that all Football Ape Fan Club NFTs have been minted.</p>
                        </div>
                        <div className="footer_bottom text-center">
                            <div className="logo mx-auto"><img src={SiteLogo} alt="" /></div>
                            <div className="social_icons">
                                <a href="https://twitter.com/FootballApeFC"><FaTwitter /></a>
                                <a href="https://discord.gg/JNkSPf2Ktm"><FaDiscord /></a>
                                <a href="https://www.instagram.com/FootballApeFanClub/"><FaInstagram /></a>
                                <a href="https://linktr.ee/FootballApeFc"> <img src={FooterIcon} alt="" /></a>
                            </div>
                            <p>Copyright &copy; 2022. FAFC. All rights reserved.</p>
                        </div>
                    </Col>
                </Row>
             </Container>
            </footer>
        )
    }

export default Footer;