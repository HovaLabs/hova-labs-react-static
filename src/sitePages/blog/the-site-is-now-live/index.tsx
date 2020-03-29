import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const TheSiteIsNowLive: React.FC<{}> = () => (
  <BlogContainer blogManifest={{ ...blogManifest, hero }}>
    <div>
      <Text>Woo!</Text>
    </div>
    <div>
      <Text>
        If you're reading this, it means that our site is now live. We've had a
        lot of fun learning how to work with the blogging platform, ghost. Check
        it out here.
      </Text>
    </div>
    <div>
      <Text>
        We're looking forward to constantly improving the violin design,
        documentation, and electronic addons. Most importantly, we're excited to
        see what YOU do with it. Please share with us any photos, videos, or
        feedback.
      </Text>
    </div>
    <div>
      <Text>All the high fives,</Text>
    </div>
    <div>
      <Text>Matt + Kaitlyn</Text>
    </div>
  </BlogContainer>
);

export default TheSiteIsNowLive;
