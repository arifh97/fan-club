import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AboutShap from "../assets/img/about-shap.png";
import AboutGalleryImg1 from "../assets/img/about/about-gallery-img1.png";
import AboutGalleryImg2 from "../assets/img/about/about-gallery-img2.png";
import AboutGalleryImg3 from "../assets/img/about/about-gallery-img3.png";
import AboutGalleryImg4 from "../assets/img/about/about-gallery-img4.png";
import AboutGalleryImg5 from "../assets/img/about/about-gallery-img5.png";
import AboutGalleryImg6 from "../assets/img/about/about-gallery-img6.png";
import AboutGalleryImg7 from "../assets/img/about/about-gallery-img7.png";
import AboutGalleryImg8 from "../assets/img/about/about-gallery-img8.png";
import AboutGalleryImg9 from "../assets/img/about/about-gallery-img9.png";
function About ()  {
    return(
        <div className="about-area">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="about_left">
                           <div className="about_gallery_img_box">
                                <figure>
                                    <img src={AboutGalleryImg1} alt="" />
                                </figure>
                                <figure>
                                    <img src={AboutGalleryImg2} alt="" />
                                </figure>
                                <figure>
                                    <img src={AboutGalleryImg3} alt="" />
                                </figure>
                                <figure>
                                    <img src={AboutGalleryImg4} alt="" />
                                </figure>
                                <figure>
                                    <img src={AboutGalleryImg5} alt="" />
                                </figure>
                                <figure>
                                    <img src={AboutGalleryImg6} alt="" />
                                </figure>
                                <figure>
                                    <img src={AboutGalleryImg7} alt="" />
                                </figure>
                                <figure>
                                    <img src={AboutGalleryImg8} alt="" />
                                </figure>
                                <figure>
                                    <img src={AboutGalleryImg9} alt="" />
                                </figure>
                           </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about_content_right">
                            <span>About</span>
                            <h2>Our Fan Club</h2>
                            <p><b>7,910 Football Ape Fan Club</b> NFT Collection | Ethereum blockchain | FAFC holders will able to Claim Baby FAFC and Mutant FAFC for free (Only Gas Fee will be charged) </p>

                            <p>Holder of FAFC will get 4 or more High-Quality Sports related <b>NFT Projects Accessible for Free</b>, These 4 plus projects will be launched by Football Ape Fan Club team in a span of one year. We will create a Sport Metaverse. </p>

                            <p>Every FAFC holder will able to claim NFTs in multiple Upcoming NFTs project like Baby FAFC, Mutant FAFC, NFL NFTs and NBA NFTs and More in a period of one year <b>2022-2023.</b> </p>

                            <p>These are upcoming project from Football Ape Fan Club. </p>
                            <a href="/" className="boxed-btn">Register on Permint</a>
                            <a href="/" className="inline-btn">Linktree</a>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;