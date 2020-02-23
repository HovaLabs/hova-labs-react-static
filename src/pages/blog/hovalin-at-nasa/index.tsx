import React from "react";

import gantry from "./Media/gantry.jpg";
import gears from "./Media/gears.jpg";
import hovalinWithNasaLogo from "./Media/hovalin-with-nasa-logo.jpg";
import kaitWithNasaWorkers from "./Media/kait-with-nasa-workers.jpg";
import makerLab from "./Media/maker-lab.jpg";
import notMatt from "./Media/not-matt.jpg";
import pcbMill from "./Media/pcb-mill.jpg";

export default (): React.ReactElement => (
  <div>
    <div>
      We had the opportunity to bring our project to
      {" " /* eslint-disable-line */}
      <a href="https://www.nasa.gov/centers/ames/home/">
        NASA's Ames Research Center
      </a>
      {" " /* eslint-disable-line */}
      this week! I met them at their booth while performing at
      {" " /* eslint-disable-line */}      
      <a href="http://steamcarnival.com/">STEAM Carnival SF</a>
      {" " /* eslint-disable-line */}
      a few weeks back, and we were beyond excited to be invited to their
      research center. Big thanks to everyone there, and especially to our
      awesome new buddy Luke.
    </div>
    <div>
      While there we got to tour the campus, learn about the projects they have
      going on, and show them everything about the Hovalin. This is totally
      going to go in our family Holiday card!
    </div>
    <div>Looking forward to going back soon! ; )</div>
    <div>
      PS: It's been amazing getting so much support for our project. All the
      thank-you's and high fives to you over the internet for reading this!
    </div>
    <img src={hovalinWithNasaLogo} alt="The Hovalin with Nasa Logo" />
    <img src={kaitWithNasaWorkers} alt="Kaitln with NASA workers" />
    <img src={makerLab} alt="Maker Lab" />
    <img src={gantry} alt="3d gantry" />
    <img src={pcbMill} alt="PCB Mill" />
    <img
      src={notMatt}
      alt="A nice NASA worker whose name I dont remember but looks vaguely like Matt"
    />
    <img src={gears} alt="A drawer full of gears" />
  </div>
);
