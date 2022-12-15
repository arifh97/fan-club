import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import SiteLogo from '../assets/img/logo.png';
function Footer ()  {
    return(
        <footer className="footer_area">
             <Container>
                <Row>
                    <Col>
                        <div className="footer_top_content">
                            <h4>Football Ape Fan Club NFT Holder Tier Reward System</h4> 
                            <p>Holders with three or more Football Ape Fan Club NFTs will be eligible for an exclusive giveaway of 79 Football Ape Fan Club NFTs <a href="/">(1 FAFC NFT per Holder)</a> to 79 Holders!</p>
                            <p>The top <a href="/">9 Football Ape Fan Club NFT</a> holders will be able to work closely with the Football Ape Fan Club Team and our metaverse development team. These 9 holders will get priority updates and have exclusive discord in-chat access with Football Ape Fan Club founders. It’s Your Ticket to Elite-Level Networking Events with Business Leaders, Entrepreneurs. On the contingency that all Football Ape Fan Club NFTs have been minted.</p>
                        </div>
                        <div className="footer_bottom">
                            <img src={SiteLogo} alt="" />
                            
                            <p>Copyright © 2021. FAFC. All rights reserved.</p>
                        </div>
                    </Col>
                </Row>
             </Container>
        </footer>
    )
}

export default Footer;