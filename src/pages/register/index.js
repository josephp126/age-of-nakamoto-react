import React from "react";
import useScrollPosition from "../../utils/useScrollPosition";

import "./style.scss";
import "./responsive.scss";

import Fighters from "./Fighters";

import imgRegister from "../../assets/images/register-page/register.png";
import imgFighter from "../../assets/images/register-page/fighter.png";
import imgWarrior from "../../assets/images/register-page/wariror.png";
import imgArcher from "../../assets/images/register-page/archer.png";
import imgOther from "../../assets/images/register-page/another copiar.png";
import imgFlame from "../../assets/images/register-page/flame.png";
import imgFlame2 from "../../assets/images/register-page/flam2e.png";
import imgFighterGroup from "../../assets/images/register-page/group.png";
import imgDegrade from "../../assets/images/register-page/degrade.png";
import registerVideo from "../../assets/video/1 stt.mp4";

const Register = () => {
  const [videoVisible, setVideoVisible] = React.useState("hidden");
  const [titleAnimation, setTitleAnimation] = React.useState("register-title");

  const scroll = useScrollPosition();
  if (scroll < 200) return <div className="register"></div>;
  // if (scroll > 900 && titleAnimation == "register-title")
  //   setTitleAnimation("register-title");

  setTimeout(() => {
    setVideoVisible("visible");
  }, 1000);

  return (
    <div className="register">
      <video
        autoPlay
        muted
        loop
        className="register-video"
        style={{ visibility: `${videoVisible}` }}
      >
        <source src={registerVideo} type="video/mp4" />
      </video>
      <div className="register-body">
        <div className="register-form">
          <div className={titleAnimation}>
            <div className="register-title1">
              <p>RAISE ARMIES, CULTIVE ECONOMIES, FORM ALLIANCES,</p>
              <p>
                AND STRATEGICALLY COMPETE WITH ONE ANOTHER OVER VIRTUAL LAND AND
                RESOURCES
              </p>
            </div>
            <div className="register-title2">
              Choose to engage with fun gameplay that rewards strategic players
              with a hyper-real dynamic or immerse yourself in player vs player
              tournaments and challenges, regardless of your financial
              situation.{" "}
            </div>
          </div>
          <button className="register-button">
            <img src={imgRegister} />
          </button>
        </div>
        <Fighters />
        <div className="mobile-register">
          <img src={imgFighterGroup} className="fighter-group" />
          <img src={imgDegrade} className="img-degrade" />
          <div className="mobile-title">
            <div className="mobile-title-1">
              <p>RAISE ARMIES, CULTIVE ECONOMIES, FORM ALLIANCES,</p>
              <p>
                AND STRATEGICALLY COMPETE WITH ONE ANOTHER OVER VIRTUAL LAND AND
                RESOURCES
              </p>
            </div>
            <p className="mobile-title-2">
              Choose to engage with fun gameplay that rewards strategic players
              with a hyper-real dynamic or immerse yourself in player vs player
              tournaments and challenges, regardless of your financial
              situation.
            </p>
            <button className="register-mobile-button">
              <img src={imgRegister} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
