import React from "react";
import {Container, Row, Col} from "react-bootstrap";
// import AboutShap from "../assets/img/about-shap.png";
import AboutGalleryImg1 from "../assets/img/about/about-gallery-img1.png";
function About ()  {
    return(
        <div className="about-area">
            <Container>
                <Row>
                    <Col xl={6}>
                        <div className="about_left">
                           <div className="about_gallery_img_box">
                                <figure>
                                    <img src={AboutGalleryImg1} alt="" />
                                </figure>
                           </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="about_content_right">
                            <span>About</span>
                            <h2>Our Fan Club</h2>
                            <p><b>7,910 Football Ape Fan Club</b> NFT Collection | Ethereum blockchain | FAFC holders will able to Claim Baby FAFC and Mutant FAFC for free (Only Gas Fee will be charged) </p>

                            <p>Holder of FAFC will get 4 or more High-Quality Sports related <b>NFT Projects Accessible for Free</b>, These 4 plus projects will be launched by Football Ape Fan Club team in a span of one year. We will create a Sport Metaverse. </p>

                            <p>Every FAFC holder will able to claim NFTs in multiple Upcoming NFTs project like Baby FAFC, Mutant FAFC, NFL NFTs and NBA NFTs and More in a period of one year <b>2022-2023.</b> </p>

                            <p>These are upcoming project from Football Ape Fan Club. </p>
                            <a href="/" className="boxed-btn yellow">Register on Permint</a>
                            <a href="/" className="inline-btn">Linktree</a>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;