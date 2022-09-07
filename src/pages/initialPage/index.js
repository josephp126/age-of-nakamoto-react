import React from "react";

// import "../../loader";
import $ from "jquery";

import AonImage from "../../components/AonImage";
import aonImage from "../../assets/images/initial-page/aon.png";
import dotImage from "../../assets/images/initial-page/Untitled-1.png";

import "./style.scss";

const InitialPage = ({ dotVisible = false }) => {
  return (
    <div className="loading-images">
      <AonImage src={aonImage} className="loading-aon-image" id="ssss" />
      <br />
      <div className="loading">
        <AonImage src={dotImage} />
      </div>
    </div>
  );
};

export default InitialPage;
