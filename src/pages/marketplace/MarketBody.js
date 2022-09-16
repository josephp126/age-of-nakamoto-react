import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import "./marketbody-style.scss";
import "./responsive.scss";

import imgElipse from "../../assets/images/marketplace-page/elipse.png";
import imgFire from "../../assets/images/marketplace-page/fire.png";
import imgElipseBg1 from "../../assets/images/marketplace-page/elipse-bg1.png";
import imgWarrior1 from "../../assets/images/marketplace-page/warrior1.png";
import imgWarrior2 from "../../assets/images/marketplace-page/warrior2.png";
import imgTitle from "../../assets/images/marketplace-page/title.png";
import imgTitle1 from "../../assets/images/marketplace-page/title1.png";
import imgDegrade from "../../assets/images/marketplace-page/degrade.png";
import imgLeftArrow from "../../assets/images/marketplace-page/LEFT.png";
import imgRightArrow from "../../assets/images/marketplace-page/RIGHT.png";
import imgMobileBg from "../../assets/images/marketplace-page/mobile-bg.png";

import imgWarrior3 from "../../assets/images/marketplace-page/warrior3.png";
import imgWarrior4 from "../../assets/images/marketplace-page/warrior4.png";

import FadeInAnimation from "../../components/FadeInAnimation";

const MarketBody = () => {
  return (
    <Controller>
      <Scene
        duration={2000}
        triggerHook="onLeave"
        pin
        // pin={{ pushFollowers: true }}
      >
        {(progress) => (
          <div className="marketplace">
            <hr />
            <div className="market-body">
              <img src={imgFire} className="img-fire" />
              <div className="features">
                <img src={imgElipse} className="img-elipse" />

                <button className="marketplace-button">FEATURES</button>
                <img src={imgElipseBg1} className="img-elipse-bg1" />

                <img src={imgMobileBg} className="mobile-bg" />

                <img src={imgWarrior1} className="img-warrior1" />
                <img src={imgWarrior2} className="img-warrior2" />
                <img src={imgWarrior3} className="img-warrior3" />
                <img src={imgWarrior4} className="img-warrior4" />

                <div className="marketplace-description">
                  <div className="title-container">
                    <h1 className="fw-light">NFT MARKETPLACE</h1>
                  </div>
                  <p className="marketplace-desc">
                    A world where players return to their roots in a medieval
                    themed environment, pitted against nature and other players,
                    and challenged to survive in an everchanging world. In the
                    Age of Nakamoto, you are given full control of your own
                    assets, allowing you to increase their value by engaging
                    with the in-game economy. This works on both a micro and
                    macro level throughout the ecosystem, rewarding you with
                    in-game assets the more you participate.
                  </p>
                </div>

                <div className="marketplace-description1">
                  <div className="title-container">
                    <h1 className="fw-light">MEDIVAL STRATEGY</h1>
                  </div>
                  <p className="marketplace-desc">
                    A world where players return to their roots in a medieval
                    themed environment, pitted against nature and other players,
                    and challenged to survive in an everchanging world. In the
                    Age of Nakamoto, you are given full control of your own
                    assets, allowing you to increase their value by engaging
                    with the in-game economy. This works on both a micro and
                    macro level throughout the ecosystem, rewarding you with
                    in-game assets the more you participate.
                  </p>
                </div>

                <div className="marketplace-description2">
                  <div className="title-container">
                    <h1 className="fw-light">GUILD ALLIANCE SYSTEM</h1>
                  </div>
                  <p className="marketplace-desc">
                    The Guild system functions in a similar way to the PVP mode,
                    the primary difference being that the guilds deploy troops
                    to an allotted battlefield where the fight will take place,
                    setting a prechosen date until troops marched. Nakamoto
                    bases the Guild system on a modified PoolTogether protocol,
                    opening up a totally new dimension to the gaming dynamics
                    regarding economic advantages for the guild founders. Wage
                    war and fight mini battles to defend your territory and take
                    what’s yours. The final test Nakamoto poses is battling
                    throughout the world to ensure survival. Employ military
                    units, make strategic attacks, and strengthen your defences
                    as open war awaits.
                  </p>
                </div>

                <div className="marketplace-description3">
                  <div className="title-container">
                    <h1 className="fw-light">LANDLORD SYSTEM</h1>
                  </div>
                  <p className="marketplace-desc">
                    Players can also become landlords. A “landlord” in the Age
                    of Nakamoto, is the proprietor of in-game lands who can
                    freely distribute land to a vassal. The vassal will then use
                    these lands to earn Gold on behalf of the landlord while
                    taking a cut from the earnings. The landlord system is a
                    great way for beginners to learn about the complicated
                    processes when playing Age of Nakamoto, and veterans to
                    maximize their earnings and help newer players.
                  </p>
                </div>

                <div className="marketplace-description4">
                  <div className="title-container">
                    <h1 className="fw-light">CRYPTO REWARD TOURNAMENTS</h1>
                  </div>
                  <p className="marketplace-desc">
                    The Age of Nakamoto will run frequent competitions on the
                    platform, whereby players can compete to earn from the prize
                    draw and increase the worth of their wallet. Fight for a
                    future that will host your throne
                  </p>
                </div>
              </div>
              <img src={imgDegrade} className="marketplace-degrade" />
              <div className="indicator">
                <img src={imgLeftArrow} className="img-arrow-left" />
                <div>
                  <h1 className="indicator-num">1</h1>
                  <h1 className="indicator-num">2</h1>
                  <h1 className="indicator-num">3</h1>
                  <h1 className="indicator-num">4</h1>
                  <h1 className="indicator-num">5</h1>
                </div>
                <img src={imgRightArrow} className="img-arrow-right" />
              </div>
            </div>
          </div>
        )}
      </Scene>
    </Controller>
  );
};

export default MarketBody;

// <Controller>
//       <Scene
//         duration={1500}
//         triggerHook="onLeave"
//         pin
//         // pin={{ pushFollowers: true }}
//       >
//         {(progress) => (
//           <div className="marketplace">
//             <div className="market-body">
//               <img src={imgFire} className="img-fire" />
//               <div className="features">
//                 <Timeline totalProgress={progress} paused>
//                   <Timeline
//                     // progress={progress}
//                     target={<img src={imgElipse} className="img-elipse" />}
//                   >
//                     <Tween from={{}} to={{ rotate: -100 }} />
//                   </Timeline>

//                   <button className="marketplace-button">FEATURES</button>
//                   <img src={imgElipseBg1} className="img-elipse-bg1" />

//                   <Timeline
//                     // progress={progress}
//                     target={<img src={imgWarrior1} className="img-warrior1" />}
//                   >
//                     <Tween
//                       from={{ opacity: 1 }}
//                       to={{ opacity: 0, left: -437 }}
//                     />
//                   </Timeline>

//                   <Timeline
//                     // progress={progress}
//                     target={<img src={imgWarrior2} className="img-warrior2" />}
//                   >
//                     <Tween
//                       from={{ opacity: 1 }}
//                       to={{ opacity: 0, right: -367 }}
//                     />
//                   </Timeline>

//                   <Timeline
//                     // progress={progress}
//                     target={<img src={imgWarrior3} className="img-warrior3" />}
//                   >
//                     <Tween
//                       from={{ opacity: 0 }}
//                       to={{ opacity: 1, left: 100 }}
//                     />
//                   </Timeline>

//                   <Timeline
//                     // progress={progress}
//                     target={<img src={imgWarrior4} className="img-warrior4" />}
//                   >
//                     <Tween
//                       from={{ opacity: 0 }}
//                       to={{ opacity: 1, right: 150 }}
//                     />
//                   </Timeline>

//                   <Timeline
//                     // progress={progress}
//                     target={
//                       <div className="marketplace-description">
//                         <img src={imgLeftArrow} className="img-arrow-left" />
//                         {/* <img src={imgTitle} className="img-marketplace-title" /> */}
//                         <h1 className="fw-light">NFT MARKETPLACE</h1>
//                         <img src={imgRightArrow} className="img-arrow-right" />
//                         <p className="marketplace-desc">
//                           A world where players return to their roots in a
//                           medieval themed environment, pitted against nature and
//                           other players, and challenged to survive in an
//                           everchanging world. In the Age of Nakamoto, you are
//                           given full control of your own assets, allowing you to
//                           increase their value by engaging with the in-game
//                           economy. This works on both a micro and macro level
//                           throughout the ecosystem, rewarding you with in-game
//                           assets the more you participate.
//                         </p>
//                       </div>
//                     }
//                   >
//                     <Tween
//                       from={{ x: 0, opacity: 1 }}
//                       to={{ x: -1000, opacity: -1 }}
//                     />
//                   </Timeline>

//                   <Timeline
//                     // progress={progress}
//                     target={
//                       <div className="marketplace-description">
//                         <img src={imgLeftArrow} className="img-arrow-left" />
//                         <h1 className="fw-light">MEDIVAL STRATEGY</h1>

//                         <img src={imgRightArrow} className="img-arrow-right" />
//                         <p className="marketplace-desc">
//                           A world where players return to their roots in a
//                           medieval themed environment, pitted against nature and
//                           other players, and challenged to survive in an
//                           everchanging world. In the Age of Nakamoto, you are
//                           given full control of your own assets, allowing you to
//                           increase their value by engaging with the in-game
//                           economy. This works on both a micro and macro level
//                           throughout the ecosystem, rewarding you with in-game
//                           assets the more you participate.
//                         </p>
//                       </div>
//                     }
//                   >
//                     <Tween
//                       from={{ x: 1000, opacity: -1 }}
//                       to={{ x: 0, opacity: 1 }}
//                     />
//                     <Tween to={{ x: -1000, opacity: -1 }} />
//                   </Timeline>

//                   <Timeline
//                     // progress={progress}
//                     target={
//                       <div
//                         className="marketplace-description1"
//                         // style={{ opacity: 0 }}
//                       >
//                         <img src={imgLeftArrow} className="img-arrow-left" />
//                         <h1 className="fw-light">GUILD ALLIANCE SYSTEM</h1>

//                         <img src={imgRightArrow} className="img-arrow-right" />
//                         <p className="marketplace-desc">
//                           The Guild system functions in a similar way to the PVP
//                           mode, the primary difference being that the guilds
//                           deploy troops to an allotted battlefield where the
//                           fight will take place, setting a prechosen date until
//                           troops marched. Nakamoto bases the Guild system on a
//                           modified PoolTogether protocol, opening up a totally
//                           new dimension to the gaming dynamics regarding
//                           economic advantages for the guild founders. Wage war
//                           and fight mini battles to defend your territory and
//                           take what’s yours. The final test Nakamoto poses is
//                           battling throughout the world to ensure survival.
//                           Employ military units, make strategic attacks, and
//                           strengthen your defences as open war awaits.
//                         </p>
//                       </div>
//                     }
//                   >
//                     <Tween
//                       from={{ x: 1000, opacity: -1 }}
//                       to={{ x: 0, opacity: 1 }}
//                     />
//                     <Tween to={{ x: -1000, opacity: -1 }} />
//                   </Timeline>

//                   {/* <Timeline
//                     progress={progress}
//                     target={
//                       <div className="marketplace-description2">
//                         <img src={imgLeftArrow} className="img-arrow-left" />
//                         <h1 className="fw-light">LANDLORD SYSTEM</h1>

//                         <img src={imgRightArrow} className="img-arrow-right" />
//                         <p className="marketplace-desc">
//                           Players can also become landlords. A “landlord” in the
//                           Age of Nakamoto, is the proprietor of in-game lands
//                           who can freely distribute land to a vassal. The vassal
//                           will then use these lands to earn Gold on behalf of
//                           the landlord while taking a cut from the earnings. The
//                           landlord system is a great way for beginners to learn
//                           about the complicated processes when playing Age of
//                           Nakamoto, and veterans to maximize their earnings and
//                           help newer players.
//                         </p>
//                       </div>
//                     }
//                   >
//                     <Tween
//                       from={{ x: 1000, opacity: -1 }}
//                       to={{ x: 0, opacity: 1 }}
//                     />
//                     <Tween to={{ x: -1000, opacity: -1 }} />
//                   </Timeline>
//                   <Timeline
//                     progress={progress}
//                     target={
//                       <div
//                         className="marketplace-description3"
//                         // style={{ opacity: 0 }}
//                       >
//                         <img src={imgLeftArrow} className="img-arrow-left" />
//                         <h1 className="fw-light">CRYPTO REWARD TOURNAMENTS</h1>

//                         <img src={imgRightArrow} className="img-arrow-right" />
//                         <p className="marketplace-desc">
//                           The Age of Nakamoto will run frequent competitions on
//                           the platform, whereby players can compete to earn from
//                           the prize draw and increase the worth of their wallet.
//                           Fight for a future that will host your throne
//                         </p>
//                       </div>
//                     }
//                   >
//                     <Tween
//                       from={{ x: 1000, opacity: -1 }}
//                       to={{ x: 0, opacity: 1 }}
//                     />
//                     <Tween to={{ x: -1000, opacity: -1 }} />
//                   </Timeline> */}
//                 </Timeline>
//               </div>
//             </div>
//           </div>
//         )}
//       </Scene>
//     </Controller>
