import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import gantry from "./Media/gantry.jpg";
import gears from "./Media/gears.jpg";
import hovalinWithNasaLogo from "./Media/hovalin-with-nasa-logo.jpg";
import kaitWithNasaWorkers from "./Media/kait-with-nasa-workers.jpg";
import makerLab from "./Media/maker-lab.jpg";
import notMatt from "./Media/not-matt.jpg";
import pcbMill from "./Media/pcb-mill.jpg";

import blogManifest from "./manifest.json";
import { BlogContainer } from "../../../components/BlogContainer";

export default (): React.ReactElement => (
  <BlogContainer author={blogManifest.author}>
    <div>
      <Text>We had the opportunity to bring our project to</Text>
      <a href="https://www.nasa.gov/centers/ames/home/">
        <Text> NASA's Ames Research Center </Text>
      </a>
      <Text>this week! I met them at their booth while performing at</Text>
      <a href="http://steamcarnival.com/">
        <Text> STEAM Carnival SF </Text>
      </a>
      <Text>
        a few weeks back, and we were beyond excited to be invited to their
        research center. Big thanks to everyone there, and especially to our
        awesome new buddy Luke.
      </Text>
    </div>
    <div>
      <Text>
        While there we got to tour the campus, learn about the projects they
        have going on, and show them everything about the Hovalin. This is
        totally going to go in our family Holiday card!
      </Text>
    </div>
    <div>
      <Text>Looking forward to going back soon! ; )</Text>
    </div>
    <div>
      <Text>
        PS: It's been amazing getting so much support for our project. All the
        thank-you's and high fives to you over the internet for reading this!
      </Text>
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
  </BlogContainer>
);
