import React from "react";

import useScrollPosition from "../../utils/useScrollPosition";

import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import imgHeader from "../../assets/images/partners-page/header-img.png";
import imgFooter from "../../assets/images/partners-page/footer-img.png";
import img1 from "../../assets/images/partners-page/01.png";
import img2 from "../../assets/images/partners-page/02.png";
import img3 from "../../assets/images/partners-page/03.png";
import img4 from "../../assets/images/partners-page/04.png";
import img5 from "../../assets/images/partners-page/05.png";
import img6 from "../../assets/images/partners-page/06.png";
import img7 from "../../assets/images/partners-page/07.png";
import img8 from "../../assets/images/partners-page/08.png";
import img9 from "../../assets/images/partners-page/09.png";

import "./style.scss";
import "./responsive.scss";

const Partners = () => {
  const scroll = useScrollPosition();
  // 5300
  if (scroll < 5000) {
    return <div className="partners"></div>;
  }

  return (
    <div className="partners">
      <hr />
      <div className="partner-main">
        <h1>PARTNERS</h1>
        <img src={imgHeader} className="partner-header-img" />

        <div className="partner-img-group">
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
          <div>
            <img src={img5} />
          </div>
          <div>
            <img src={img6} />
          </div>
          <div>
            <img src={img7} />
          </div>
          <div>
            <img src={img8} />
          </div>
          <div>
            <img src={img9} />
          </div>
        </div>
        <img src={imgFooter} className="partner-footer-img" />
      </div>
    </div>
  );
};

export default Partners;
