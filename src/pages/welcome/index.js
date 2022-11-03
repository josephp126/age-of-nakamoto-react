import React from "react";

import useScrollPosition from "../../utils/useScrollPosition";

import imgBg from "../../assets/images/welcome-page/bg.png";

import "./style.scss";
import "./responsive.scss";

const Welcome = () => {
  const scroll = useScrollPosition();
  if (scroll < 1138) return <div className="welcome"></div>;

  return (
    <div className="welcome">
      <img src={imgBg} className="img-bg" />
      <div className="paper-description">
        <h1 className="paper-title">
          WELCOME TO
          <br /> AGE OF NAKAMOTO
        </h1>
        <p className="paper-desc-paragraph">
          A world where players return to their roots in a medieval themed
          environment, pitted against nature and other players, and challenged
          to survive in an everchanging world.
        </p>
        <p className="paper-desc-paragraph">
          In the Age of Nakamoto, you are given full control of your own assets,
          allowing you to increase their value by engaging with the in-game
          economy. This works on both a micro and macro level throughout the
          ecosystem, rewarding you with in-game assets the more you participate.
        </p>
        <p className="paper-desc-paragraph">
          The NFT-based Strategy game gives even the newest of comers to rise
          through the ranks from a simple commoner to a Nakamoto nobleman. The
          world has no prejudice and gives everyone its fair share of brutality
          and luck, devoted to creating gameplay that can be enjoyable for
          everyone.
        </p>
        <p className="paper-desc-paragraph">
          A bright metaverse, that doesn't tire the eyes, but engages the mind;
          even when the game is off.
        </p>
        <p className="paper-desc-paragraph">
          The Age of Nakamoto is designed to cultivate creativity and ingenuity,
          sparking in-game novelties rather than depleting your gaming juices.
          Hoping to supplant the more restrictive and tedious gaming formats,
          the metaverse will facilitate seemingly endless outcomes for both
          imagination and wealth creation.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
