import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import wwcHovalin from "./Media/wwc-hovalin.jpg";

import blogManifest from "./manifest.json";
import { BlogContainer } from "../../../components/BlogContainer";

export default (): React.ReactElement => (
  <BlogContainer author={blogManifest.author}>
    <div>
      <Text>Today I got to hang with my favorite ladies at</Text>
      <a href="https://www.womenwhocode.com/">
        <Text> Women Who Code </Text>
      </a>
      <Text>by opening their presentations with a Hovalin performance!</Text>
    </div>
    <div>
      <Text>
        At the event we got to hear some super inspiring talks from fellow
        ladies in tech and hear about how their wonderful organization is
        growing (spoiler alert: it's growing out of this world fast!). In
        addition to performing that night, i've been honored to be involved in
        designing their new website as well as some pretty exciting upcoming
        projects! (Stay tuned)
      </Text>
    </div>
    <div>
      <Text>
        If you'd like to get involved with Women Who Code, you should checkout
        their
      </Text>

      <a href="https://www.womenwhocode.com/networks">
        <Text> networks </Text>
      </a>
      <Text>
        page to find a network near you, or contact them to start your own
        chapter : )
      </Text>
    </div>
    <img src={wwcHovalin} alt="Hovalin on wood" />
  </BlogContainer>
);
