import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import wwcHovalin from "./Media/wwc-hovalin.jpg";

import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const WomenWhoCode: React.FC<{}> = () => (
  <BlogContainer blogManifest={{ ...blogManifest, hero }}>
    <div>
      Today I got to hang with my favorite ladies at
      <a href="https://www.womenwhocode.com/">{" Women Who Code "}</a>
      by opening their presentations with a Hovalin performance!
    </div>
    <div>
      At the event we got to hear some super inspiring talks from fellow ladies
      in tech and hear about how their wonderful organization is growing
      (spoiler alert: it's growing out of this world fast!). In addition to
      performing that night, i've been honored to be involved in designing their
      new website as well as some pretty exciting upcoming projects! (Stay
      tuned)
    </div>
    <div>
      If you'd like to get involved with Women Who Code, you should checkout
      their
      <a href="https://www.womenwhocode.com/networks">{" networks "}</a>
      page to find a network near you, or contact them to start your own chapter
      : )
    </div>
    <img src={wwcHovalin} alt="Hovalin on wood" />
  </BlogContainer>
);

export default WomenWhoCode;
