import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const BoilerplateBlogPost: React.FC<{}> = () => (
  <BlogContainer blogManifest={{ ...blogManifest, hero }}>
    <div>
      <Text>I'm a blog post</Text>
    </div>
  </BlogContainer>
);
export default BoilerplateBlogPost;
