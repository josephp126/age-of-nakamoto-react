import React from "react";
import ReactPlayer from "react-player";

import InitialPage from "../initialPage";
import "./style.scss";
import "./responsive.scss";
import useScrollPosition from "../../utils/useScrollPosition";

import imgLogo from "../../assets/images/home-page/logo.png";
import imgCloud1 from "../../assets/images/home-page/clouds 1.png";
import imgCloud2 from "../../assets/images/home-page/clouds 2.png";
import imgCloud3 from "../../assets/images/home-page/clouds 3.png";
import imgFx1 from "../../assets/images/home-page/fx 1.png";
import imgFx2 from "../../assets/images/home-page/fx 2.png";
import imgMount1 from "../../assets/images/home-page/mount 1.png";
import imgMount2 from "../../assets/images/home-page/mount 2.png";
import imgMount3 from "../../assets/images/home-page/mount 3.png";
import imgRecortado from "../../assets/images/home-page/RECORTADO.png";
import imgHomeLogo from "../../assets/images/home-page/nakamotologo-contrast.png";
import imgButton1 from "../../assets/images/home-page/b01.png";
import imgButton2 from "../../assets/images/home-page/b02.png";
import imgButton3 from "../../assets/images/home-page/b03.png";
import imgArrowLeft from "../../assets/images/home-page/arrow-left.png";
import imgArrowRight from "../../assets/images/home-page/arrow-right.png";
import imgDot from "../../assets/images/home-page/oooooo.png";
import iconInstagram from "../../assets/images/home-page/icon-instagram.png";
import iconMessage from "../../assets/images/home-page/icon-message.png";
import iconTwitter from "../../assets/images/home-page/icon-twitter.png";
import iconYoutube from "../../assets/images/home-page/icon-youtube.png";
import iconFacebook from "../../assets/images/home-page/icon-facebook.png";
import initialVideo1 from "../../assets/video/0 stt 2.mp4";
import initialVideo2 from "../../assets/video/0 stt.mp4";
import imgMobile from "../../assets/images/home-page/mobile-btn.png";

import AonImage from "../../components/AonImage";
import aonImage from "../../assets/images/initial-page/aon.png";
import dotImage from "../../assets/images/initial-page/Untitled-1.png";

const Home = ({ loading }) => {
  let iconAnimation = {
    animationName: "animation-link-icons",
    animationDuration: "1.5s",
  };

  const [visible, setVisible] = React.useState(false);
  const [classnames, setClassnames] = React.useState(
    "loading-images1 loading-disappear"
  );

  const scrollPosition = useScrollPosition();
  // if (scrollPosition < 10)
  // return (
  //   <div className="loading-images1 loading-disappear">
  //     <AonImage src={aonImage} className="loading-aon-image" id="ssss" />
  //     <br />
  //   </div>
  // );

  setTimeout(() => {
    if (!visible) {
      setVisible(true);
    }
  }, 400);

  setTimeout(() => {
    if (!visible) {
      setClassnames((prevState) => {
        return prevState + " display-none";
      });
    }
  }, 400);

  return (
    // <div className="home">
    <>
      <div className={classnames}>
        <AonImage src={aonImage} className="loading-aon-image" />
        <br />
      </div>
      {!visible ? (
        ""
      ) : (
        <>
          <video autoPlay muted loop className="initial-video1">
            <source src={initialVideo1} type="video/mp4" />
          </video>
          <video autoPlay muted loop className="initial-video2">
            <source src={initialVideo2} type="video/mp4" />
          </video>
          <div className="nav-bar">
            <ul>
              <div className="left-navbar">
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">WHITEPAPER</a>
                </li>
              </div>
              {/* <div className="mobile-dropdown">
                <button className="mobile-nav">
                  <img src={imgMobile} />
                </button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div> */}
              <div className="dropdown">
                <button className="dropbtn">
                  <img src={imgMobile} />
                </button>
                <div className="dropdown-content">
                  <a href="#">HOME</a>
                  <a href="#">WHITEPAPER</a>
                  <a href="#">CONTACT US</a>
                  <a href="#">REGISTER</a>
                </div>
              </div>
              <div className="right-navbar">
                <li>
                  <a href="#">CONTACT US</a>
                </li>
                <li>
                  <a href="#">REGISTER</a>
                </li>
              </div>
            </ul>
            <img src={imgLogo} className="navbar-logo" />
          </div>
          <img src={imgCloud1} className="img-cloud-1" />
          <img src={imgFx2} className="img-fx2" />
          <img src={imgMount3} className="img-mount3" />
          <img src={imgCloud2} className="img-cloud2" />
          <img src={imgMount2} className="img-mount2" />
          <img src={imgCloud3} className="img-cloud3" />
          <img src={imgFx1} className="img-fx1" />
          <div className="home-banner">
            <img src={imgHomeLogo} className="img-home-logo" />
            <div className="home-btn-group">
              <div className="home-banner-img">
                <img src={imgArrowLeft} className="img-arrow" />
              </div>
              <button className="home-btn">
                <img src={imgButton3} style={{ marginTop: "16px" }} />
              </button>
              <div className="home-banner-img">
                <img src={imgDot} className="img-dot" />
              </div>
              <button className="home-btn">
                <img src={imgButton1} />
              </button>
              <div className="home-banner-img">
                <img src={imgDot} className="img-dot" />
              </div>
              <button className="home-btn">
                <img src={imgButton2} style={{ marginTop: "16px" }} />
              </button>
              <div className="home-banner-img">
                <img src={imgArrowRight} className="img-arrow" />
              </div>
            </div>
          </div>
          <img src={imgRecortado} className="img-recortado" />
          <img src={imgMount1} className="img-mount1" />
          {/* <div className="link-group"> */}
          <a
            href="#"
            className="link-group-list"
            style={{
              left: "100px",
              animationFillMode: "both",
              animationDelay: "1.2s",
            }}
          >
            <img src={iconMessage} />
          </a>
          <a
            href="#"
            className="link-group-list"
            style={{
              left: "150px",
              animationFillMode: "both",
              animationDelay: "0.9s",
            }}
          >
            <img src={iconTwitter} />
          </a>
          <a
            href="#"
            className="link-group-list"
            style={{
              left: "200px",
              animationFillMode: "both",
              animationDelay: "0.6s",
            }}
          >
            <img src={iconFacebook} />
          </a>
          <a
            href="#"
            className="link-group-list"
            style={{
              left: "250px",
              animationFillMode: "both",
              animationDelay: "0.3s",
            }}
          >
            <img src={iconYoutube} />
          </a>
          <a
            href="#"
            className="link-group-list"
            style={{
              left: "300px",
              animationFillMode: "both",
            }}
          >
            <img src={iconInstagram} />
          </a>
        </>
      )}
    </>
  );
};

export default Home;
