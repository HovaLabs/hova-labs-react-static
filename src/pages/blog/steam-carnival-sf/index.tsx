import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import crowdShot from "./Media/crowd-shot.jpg";
import dustinPlaying from "./Media/dustin-playing.jpg";
import gearShot from "./Media/gear-shot.jpg";
import hovalinOnConcrete from "./Media/hovalin-on-concrete.jpg";
import itinerary from "./Media/itinerary.jpg";
import kaitlynPlaying from "./Media/kaitlyn-playing.jpg";
import kaitlynShowingTheHovalin from "./Media/kaitlyn-showing-the-hovalin.jpg";
import kaitlynTalkingToPeople from "./Media/kaitlyn-talking-to-people.jpg";
import steamDisclaimer from "./Media/steam-disclaimer.jpg";
import steamExhibit from "./Media/steam-exhibit.jpg";
import steamExhibit2 from "./Media/steam-exhibit-2.jpg";
import steamExhibit3 from "./Media/steam-exhibit-3.jpg";

import blogManifest from "./manifest.json";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const SteamCarnivalSF: React.FC<{}> = () => (
  <BlogContainer blogManifest={blogManifest}>
    <div>
      <Text>
        Yes! I got to perform on our latest version of Hovalin for 11 shows over
        3 days at STEAM Carnival when they were in San Francisco over the
        weekend! This was only our second round of official Hovalin performances
        since we launched last month, and it was such an honor to be there! We
        even got featured in their press release : )
      </Text>
    </div>
    <img src={crowdShot} alt="Steam Carnival" />
    <div>
      <Text>
        For this event we decided to print a hot pink Hovalin, which was the
        most outlandish yet acceptable color I could think of. This turned out
        to be a hit with all the kids (not just the little girls!), and it got a
        lot of "kid time".
      </Text>
    </div>
    <div>
      <Text>
        It was especially great meeting dads with their little daughters that
        were interested in getting up close with a "pink violin", which turned
        into a great opportunity to show them how they can make one (or
        anything, really) themselves because 3D printing and modeling is for
        everyone of all ages. One of the cooler moments was gradually realizing
        that our Hovalin project is so much bigger than just about the Hovalin
        itself. It's about inspiring kids to create and inspiring the makers of
        the future.
      </Text>
    </div>
    <div>
      <Text>
        Big thanks to Two Bit Circus for having me and to all the awesome staff
        for being great!
      </Text>
    </div>
    <img src={gearShot} alt="hovalin with gear" />
    <img src={itinerary} alt="Carnival Itinerary" />
    <img src={kaitlynPlaying} alt="Kaitlyn playing" />
    <img src={dustinPlaying} alt="Dustin playing" />
    <img src={hovalinOnConcrete} alt="Hovalin on concrete" />
    <img src={kaitlynTalkingToPeople} alt="Kaitlyn talking to people" />
    <img src={kaitlynShowingTheHovalin} alt="kaitln showing the hovalin" />
    <div>
      <Text>
        Also, there were a lot of other amazing things! Check out some of the
        fun and unique games that filled the pier --->
      </Text>
    </div>
    <img src={steamExhibit} alt="Steam exhibit" />
    <img src={steamExhibit2} alt="steam exhibit" />
    <img src={steamExhibit3} alt="steam exhibit" />
    <img src={steamDisclaimer} alt="disclaimer" />
  </BlogContainer>
);

export default SteamCarnivalSF;
