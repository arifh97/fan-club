import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeImg1 from "../assets/img/marquee/1.jpg";
import MarqueeImg2 from "../assets/img/marquee/2.jpg";
import MarqueeImg3 from "../assets/img/marquee/3.jpg";
import MarqueeImg4 from "../assets/img/marquee/4.jpg";
import MarqueeImg5 from "../assets/img/marquee/5.jpg";
import MarqueeImg6 from "../assets/img/marquee/6.jpg";
import MarqueeImg7 from "../assets/img/marquee/7.jpg";
import Marquee_Left_from_right_img1 from "../assets/img/marquee/left-from-right/marquee-img1.jpg";
import Marquee_Left_from_right_img2 from "../assets/img/marquee/left-from-right/marquee-img2.jpg";
import Marquee_Left_from_right_img3 from "../assets/img/marquee/left-from-right/marquee-img3.jpg";
import Marquee_Left_from_right_img4 from "../assets/img/marquee/left-from-right/marquee-img4.jpg";
import Marquee_Left_from_right_img5 from "../assets/img/marquee/left-from-right/marquee-img5.jpg";
import Marquee_Left_from_right_img6 from "../assets/img/marquee/left-from-right/marquee-img6.jpg";
import Marquee_Left_from_right_img7 from "../assets/img/marquee/left-from-right/marquee-img7.jpg";
import Marquee_Left_from_right_img8 from "../assets/img/marquee/left-from-right/marquee-img8.jpg";
import Marquee_Left_from_right_img9 from "../assets/img/marquee/left-from-right/marquee-img9.jpg";
import Marquee_Left_from_right_img10 from "../assets/img/marquee/left-from-right/marquee-img10.jpg";
import Marquee_Left_from_right_img11 from "../assets/img/marquee/left-from-right/marquee-img11.jpg";
import Marquee_Left_from_right_img12 from "../assets/img/marquee/left-from-right/marquee-img12.jpg";
import Marquee_Left_from_right_img13 from "../assets/img/marquee/left-from-right/marquee-img13.jpg";
import Marquee_Left_from_right_img14 from "../assets/img/marquee/left-from-right/marquee-img14.jpg";
import Marquee_Left_from_right_img15 from "../assets/img/marquee/left-from-right/marquee-img15.jpg";
import Marquee_Left_from_right_img16 from "../assets/img/marquee/left-from-right/marquee-img16.jpg";
import Marquee_Left_from_right_img17 from "../assets/img/marquee/left-from-right/marquee-img17.jpg";
import Marquee_Left_from_right_img18 from "../assets/img/marquee/left-from-right/marquee-img18.jpg";
import Marquee_Left_from_right_img19 from "../assets/img/marquee/left-from-right/marquee-img19.jpg";


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
                        <img src={Marquee_Left_from_right_img1} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img2} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img3} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img4} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img5} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img6} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img7} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img8} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img9} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img10} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img11} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img12} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img13} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img14} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img15} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img16} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img17} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img18} alt="" />
                    </figure>
                    <figure>
                        <img src={Marquee_Left_from_right_img19} alt="" />
                    </figure>
                </Marquee>
            </div>
        </div>
    )
}

export default MarqueePage;