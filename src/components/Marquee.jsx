import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeImg1 from "../assets/img/marquee/1.jpg";
import MarqueeImg2 from "../assets/img/marquee/2.jpg";
import MarqueeImg3 from "../assets/img/marquee/3.jpg";
import MarqueeImg4 from "../assets/img/marquee/4.jpg";
import MarqueeImg5 from "../assets/img/marquee/5.jpg";
import MarqueeImg6 from "../assets/img/marquee/6.jpg";
import MarqueeImg7 from "../assets/img/marquee/7.jpg";
function MarqueePage ()  {
    return(
        <div className="marquee_section">
        <div className="marquee_left">
            <Marquee speed={80}>
                <figure>
                    <img src={MarqueeImg1} alt="" />
                </figure>
                <figure>
                    <img src={MarqueeImg2} alt="" />
                </figure>
                <figure>
                    <img src={MarqueeImg3} alt="" />
                </figure>
                <figure>
                    <img src={MarqueeImg4} alt="" />
                </figure>
                <figure>
                    <img src={MarqueeImg5} alt="" />
                </figure>
                <figure>
                    <img src={MarqueeImg6} alt="" />
                </figure>
                <figure>
                    <img src={MarqueeImg7} alt="" />
                </figure>
            </Marquee>
        </div>
            <div className="marquee_right">
                <Marquee speed={80} direction="right">
                <figure>
                    <img src={MarqueeImg1} alt="" />
                </figure>
                <figure>
                    <img src={MarqueeImg2} alt="" />
                </figure>
                <figure>
                    <img src={MarqueeImg3} alt="" />
                </figure>
                <figure>
                    <img src={MarqueeImg4} alt="" />
                </figure>
                <figure>
                    <img src={MarqueeImg5} alt="" />
                </figure>
                <figure>
                    <img src={MarqueeImg6} alt="" />
                </figure>
                <figure>
                    <img src={MarqueeImg7} alt="" />
                </figure>
                </Marquee>
            </div>
        </div>
    )
}

export default MarqueePage;