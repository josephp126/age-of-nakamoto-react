import React from "react";

import "./fighters.scss";

import imgFighter from "../../assets/images/register-page/fighter.png";
import imgWarrior from "../../assets/images/register-page/wariror.png";
import imgArcher from "../../assets/images/register-page/archer.png";
import imgOther from "../../assets/images/register-page/another copiar.png";
import imgFlame from "../../assets/images/register-page/flame.png";
import imgFlame2 from "../../assets/images/register-page/flam2e.png";

const Fighters = () => {
  return (
    <div className="register-fighters">
      <img src={imgFlame} className="register-flame" />
      <img src={imgFlame2} className="register-flame2" />
      <img src={imgOther} className="register-other" />
      <img src={imgWarrior} className="register-warrior" />
      <img src={imgArcher} className="register-archer" />
      <img src={imgFighter} className="register-fighter" />
    </div>
  );
};

export default Fighters;
