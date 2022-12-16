import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ArrowDwonLeftAngle from "../assets/img/arrow_down_left_angle.png";
import FafcRightImg from "../assets/img/fafc_right-img.png";
function Fafc ()  {
    return(
        <div className="fafc_nfts_section">
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="arrow_down_left_angle">
                            <figure>
                                <img src={ArrowDwonLeftAngle} alt="" />
                            </figure>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="fafc_content_left">
                          <h2><span>FAFC NFTs</span> are more than just an avatar!</h2>
                          <p>Football Ape Fan Club is an NFT collection consisting of <b>7,910 FootballApeFC NFT</b> on the Ethereum blockchain. We will create an NFT Metaverse. We will bring more utility for every NFT project. </p>

                          <p>Every FAFC holder will able to Claim a Mutant Football Ape and Baby Football Ape NFT for free. Only gas fees will be charged. </p>
                          <div className="example_box">
                            <div className="example_title">
                                <span>Example</span>
                            </div>
                                <p>If you hold <b>1 FAFC</b> you can claim <span>1 Mutant</span> and 1 BFAFC Nft for free. If you hold <b>50 FAFC</b> you can claim <b>50 Mutants</b> and <b>50 BFAFC Nft for free.</b> (Only Gas Fees will be Charged)</p>
                          </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="fafc_right">
                           <figure>
                            <img src={FafcRightImg} alt="" />
                           </figure>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Fafc;