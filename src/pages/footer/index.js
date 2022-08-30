import React from "react";

import "./style.scss";

import imgFooterLogo from "../../assets/images/footer-page/nakamotologo-contrast.png";
import imgFacebookIcon from "../../assets/images/footer-page/icon-facebook.png";
import imgInstagramIcon from "../../assets/images/footer-page/icon-instagram.png";
import imgMessageIcon from "../../assets/images/footer-page/icon-message.png";
import imgTwitterIcon from "../../assets/images/footer-page/icon-twitter.png";
import imgYoutubeIcon from "../../assets/images/footer-page/icon-youtube.png";
import imgOne from "../../assets/images/footer-page/one.png";
import imgRubiIcon from "../../assets/images/footer-page/logo v.2.png";
import imgFooterLine from "../../assets/images/footer-page/line.png";

import imgDegrade from "../../assets/images/subscribe-page/degrade.png";

const Footer = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="footer">
        {/* <img src={imgDegrade} className="degrade" /> */}
        <div className="footer-left">
          <img src={imgFooterLogo} className="img-footer-logo" />
          <div className="footer-contact">
            <img src={imgMessageIcon} />
            <img src={imgTwitterIcon} />
            <img src={imgFacebookIcon} />
            <img src={imgYoutubeIcon} />
            <img src={imgInstagramIcon} />
          </div>
        </div>
        <div className="footer-middle">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
            <li>
              <a href="#">PRIVACY POLICE</a>
            </li>
            <li>
              <a href="#">WHITEPAPER</a>
            </li>
            <li>
              <a href="#">REGISTER</a>
            </li>
            <li>
              <a href="#">TERMS OF USE</a>
            </li>
          </ul>
        </div>
        <img src={imgOne} className="one" />
      </div>
      <div className="footer-logo">
        <img src={imgRubiIcon} className="img-rubi" />
      </div>
      <img src={imgFooterLine} className="img-footer-line" />
    </div>
  );
};

export default Footer;
