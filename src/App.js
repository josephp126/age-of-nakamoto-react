import React from "react";
import Preload from "react-preload";
import { Controller, Scene } from "react-scrollmagic";

import "./loader.js";
import $ from "jquery";

import logo from "./logo.svg";
import "./App.css";

// const fs = require("fs");
// import listReactFiles from "list-react-files";

// listReactFiles("./pages").then((files) => console.log(files));

const imgBase = "https://picsum.photos/800/600?";

function App() {
  const images = [
    "http://54.183.136.247/static/media/0 stt 2.4dc405ef57c7e7d35393.mp4",
    "http://54.183.136.247/static/media/0 stt.88c9e2a9e8486f72e828.mp4",
    "http://54.183.136.247/static/media/01.24503326c3c66ee92a87.png",
    "http://54.183.136.247/static/media/09.6c2bfbac32ddf7eeab03.png",
    "http://54.183.136.247/static/media/1 stt.7d7821c39ff2283ec604.mp4",
    "http://54.183.136.247/static/media/Agrupar 30.79bb72b485f4167d0f1e.png",
    "http://54.183.136.247/static/media/another copiar.51503e17fbe4c663f53b.png",
    "http://54.183.136.247/static/media/aon.6a66e57decbbe3fad43d.png",
    "http://54.183.136.247/static/media/archer.7578436f877b1bbb0eaa.png",
    "http://54.183.136.247/static/media/b01.d5db8677b13175567597.png",
    "http://54.183.136.247/static/media/b02.15c0d019d711372ee990.png",
    "http://54.183.136.247/static/media/b03.6a3b243a41f3d9e019f4.png",
    "http://54.183.136.247/static/media/background.86939fd0188f28f3f618.png",
    "http://54.183.136.247/static/media/bg.0a39d260af2f79df9b73.png",
    "http://54.183.136.247/static/media/bg.1d9a9c15d1bcb0dba0e4.png",
    "http://54.183.136.247/static/media/bg.298923636c14132f6bf0.png",
    "http://54.183.136.247/static/media/bg.5b4e0e24284520847944.png",
    "http://54.183.136.247/static/media/bg.b3b1cbc0c8f89ca80aaa.png",
    "http://54.183.136.247/static/media/buttom.4e801e7b8985d9aaf641.png",
    "http://54.183.136.247/static/media/button.d412684e7b17ad0849c6.png",
    "http://54.183.136.247/static/media/cloud-1.cd5352b098104afbe691.png",
    "http://54.183.136.247/static/media/cloud-2.714d16b22bdfb0e718b1.png",
    "http://54.183.136.247/static/media/cloud-3.47d8a60da797e25e93eb.png",
    "http://54.183.136.247/static/media/clouds 1.42244b97f0f1087f3f79.png",
    "http://54.183.136.247/static/media/clouds 2.8f39316aaf807bd13e51.png",
    "http://54.183.136.247/static/media/clouds 3.f7d3df83ca3d472215c2.png",
    "http://54.183.136.247/static/media/degrade.96ed0d12181d9656917e.png",
    "http://54.183.136.247/static/media/degrade.e9f7f814ee07bd4f17c8.png",
    "http://54.183.136.247/static/media/elipse-bg1.2734a99456fdd2300706.png",
    "http://54.183.136.247/static/media/elipse.f66201a9b4c2edb14314.png",
    "http://54.183.136.247/static/media/ff stt.1c7bee9671aba3656520.mp4",
    "http://54.183.136.247/static/media/fighter.ccaa0e01f62ea904c6e1.png",
    "http://54.183.136.247/static/media/fire.2bf772e4c776ed98eb18.png",
    "http://54.183.136.247/static/media/flam2e.9663ad6d27ef472e2ebc.png",
    "http://54.183.136.247/static/media/flame.225893f1942dbbb405f0.png",
    "http://54.183.136.247/static/media/fx 1.f98902742f4ab0cb6e9c.png",
    "http://54.183.136.247/static/media/fx 2.7f72816649de099044d4.png",
    "http://54.183.136.247/static/media/headbar.a17efce0f724610513e2.png",
    "http://54.183.136.247/static/media/index.js",
    "http://54.183.136.247/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg",
    "http://54.183.136.247/static/media/logo.c0e863701becd74fdfb4.png",
    "http://54.183.136.247/static/media/main.dd3267b70f7f383eaf7c.png",
    "http://54.183.136.247/static/media/man.45b30ffcf4eb0e16636c.png",
    "http://54.183.136.247/static/media/mount 1.7630abbeb8f05c5ba656.png",
    "http://54.183.136.247/static/media/mount 2.1cd68142ef4638ea572b.png",
    "http://54.183.136.247/static/media/mount 3.dfe96fb4be6ef56bd378.png",
    "http://54.183.136.247/static/media/mt 01.a6883513b1d2861c9e93.png",
    "http://54.183.136.247/static/media/mt 02.441ace855ddccdfb4fb8.png",
    "http://54.183.136.247/static/media/mt 03.c7f9cd0bdce8a3de8f3e.png",
    "http://54.183.136.247/static/media/mt 04.3a3567813c3fe698f386.png",
    "http://54.183.136.247/static/media/mt 05.6f5f3d1b26e88885c5c5.png",
    "http://54.183.136.247/static/media/mt 06.817e171807706f29bf85.png",
    "http://54.183.136.247/static/media/nakamotologo-contrast.6342f6b028c67cfb6547.png",
    "http://54.183.136.247/static/media/nakamotologo-contrast.a29bd7d51084e4e8c028.png",
    "http://54.183.136.247/static/media/paper.622793e0e2d4b5649158.png",
    "http://54.183.136.247/static/media/RECORTADO.cc7b772d85c0fdaddc22.png",
    "http://54.183.136.247/static/media/register.f938d63902b8f3ee1eb1.png",
    "http://54.183.136.247/static/media/title.9165fe21d025e55cb396.png",
    "http://54.183.136.247/static/media/title1.bf0279ccbf98806e1351.png",
    "http://54.183.136.247/static/media/wariror.89150b038bd57c6e4255.png",
    "http://54.183.136.247/static/media/warrior1.7fed183d9d5c1002a5a9.png",
    "http://54.183.136.247/static/media/warrior2.f48e36710182a9ac2695.png",
    "http://54.183.136.247/static/media/warrior3.2b8c55a88528e5e18029.png",
    "http://54.183.136.247/static/media/warrior4.11ad1d16e9763b191798.png",
    "http://54.183.136.247/static/media/women.c13bc5287baa34c1b459.png",
  ];

  const [loading, setLoading] = React.useState(false);

  const onSuccess = () => {
    setLoading(true);
    $(".loading-aon-image").addClass("loading-disappear");
    $(".loading-images").addClass("display-none");
  };

  const loadingIndicator = <InitialPage />;
  return (
    <div className="App">
      <div className="home">
        <Preload
          loadingIndicator={loadingIndicator}
          images={images}
          // autoResolveDelay={5000}
          onError={onSuccess}
          onSuccess={onSuccess}
          resolveOnError={true}
          mountChildren={true}
        >
          <Home />
        </Preload>
      </div>
      {loading ? <></> : ""}
    </div>
  );
}

export default App;
