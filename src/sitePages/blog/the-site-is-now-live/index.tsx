import React from "react";

import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const TheSiteIsNowLive: React.FC<{}> = () => (
  <BlogContainer blogManifest={{ ...blogManifest, hero }}>
    <div>Woo!</div>
    <div>
      If you're reading this, it means that our site is now live. We've had a
      lot of fun learning how to work with the blogging platform, ghost. Check
      it out here.
    </div>
    <div>
      We're looking forward to constantly improving the violin design,
      documentation, and electronic addons. Most importantly, we're excited to
      see what YOU do with it. Please share with us any photos, videos, or
      feedback.
    </div>
    <div>All the high fives,</div>
    <div>Matt + Kaitlyn</div>
  </BlogContainer>
);

export default TheSiteIsNowLive;
