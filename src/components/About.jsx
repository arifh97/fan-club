import React, {useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutGalleryImg1 from "../assets/img/about/about-gallery-img1.png";
function About ()  {
    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, []);
    return(
        <div className="about-area" id="about">
            <Container>
                <Row>
                    <Col xl={6}>
                        <div className="about_left"   data-aos="fade-right" data-aos-duration="700">
                           <div className="about_gallery_img_box">
                                <figure>
                                    <img src={AboutGalleryImg1} alt="" />
                                </figure>
                           </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="about_content_right">
                            
                            <span className="d-block"  data-aos="fade-up" data-aos-duration="800">About</span>
                            <h2  data-aos="fade-up" data-aos-duration="850">Our Fan Club</h2>
                            <p  data-aos="fade-up" data-aos-duration="900"><b>7,910 Football Ape Fan Club</b> NFT Collection | Ethereum blockchain | FAFC holders will able to Claim Baby FAFC and Mutant FAFC for free (Only Gas Fee will be charged) </p>

                            <p  data-aos="fade-up" data-aos-duration="900">Holder of FAFC will get 4 or more High-Quality Sports related <b>NFT Projects Accessible for Free</b>, These 4 plus projects will be launched by Football Ape Fan Club team in a span of one year. We will create a Sport Metaverse. </p>

                            <p  data-aos="fade-up" data-aos-duration="900">Every FAFC holder will able to claim NFTs in multiple Upcoming NFTs project like Baby FAFC, Mutant FAFC, NFL NFTs and NBA NFTs and More in a period of one year <b>2022-2023.</b> </p>

                            <p  data-aos="fade-up" data-aos-duration="900">These are upcoming project from Football Ape Fan Club. </p>
                           <div data-aos="fade-up" data-aos-duration="950">
                                <a href="https://www.premint.xyz/football-ape-fan-club/" className="boxed-btn yellow" >Register on Permint</a>
                                <a href="https://linktr.ee/FootballApeFc" className="inline-btn">Linktree</a>
                           </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;