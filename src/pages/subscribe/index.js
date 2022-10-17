import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import "./style.scss";
import "./responsive.scss";

import useScrollPosition from "../../utils/useScrollPosition";

import imgLine from "../../assets/images/subscribe-page/Agrupar 30.png";
import imgMt1 from "../../assets/images/subscribe-page/mt 01.png";
import imgMt2 from "../../assets/images/subscribe-page/mt 02.png";
import imgMt3 from "../../assets/images/subscribe-page/mt 03.png";
import imgMt4 from "../../assets/images/subscribe-page/mt 04.png";
import imgMt5 from "../../assets/images/subscribe-page/mt 05.png";
import imgMt6 from "../../assets/images/subscribe-page/mt 06.png";

import imgCloud1 from "../../assets/images/subscribe-page/cloud-1.png";
import imgCloud2 from "../../assets/images/subscribe-page/cloud-2.png";
import imgCloud3 from "../../assets/images/subscribe-page/cloud-3.png";

import imgDegrade from "../../assets/images/subscribe-page/degrade.png";

import videoSunShine from "../../assets/video/ff stt.mp4";

const Subscribe = () => {
  const scroll = useScrollPosition();

  if (scroll < 6000)
    return (
      <div className="subscribe">
        <div className="subscribe-header"></div>
      </div>
    );

  return (
    <div className="subscribe">
      <hr />

      <img src={imgDegrade} className="img-degrade-subscribe" />
      {/* <div className="subscribe-header">
       
      </div> */}

      <div className="subscribe-body">
        <div className="subscribe-form">
          <p className="animation-subscribe-form-p">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>

          <div
            className="form-body animation-form-body"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <input
              type="text"
              placeholder="youremail@email.com"
              className="subscribe-input"
            />

            <button className="subscribe-send">Send</button>
          </div>
        </div>
        {/* <video autoPlay muted loop className="video-sunshine">
          <source src={videoSunShine} type="video/mp4" />
        </video> */}
        <img src={imgMt3} className="img-mt3" />
        <img src={imgMt5} className="img-mt5" />
        <img src={imgMt4} className="img-mt4" />
        <img src={imgMt2} className="img-mt2" />
        <img src={imgCloud2} className="img-cloud2" />
        <img src={imgCloud3} className="img-cloud3" />
        <img src={imgCloud1} className="img-cloud1" />
        <img src={imgMt1} className="img-mt1" />
        {/* <img src={imgCharacter} className="img-character" /> */}
      </div>
    </div>
  );
};

export default Subscribe;
