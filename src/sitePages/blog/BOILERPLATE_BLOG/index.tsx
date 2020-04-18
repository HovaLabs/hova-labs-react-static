import React from "react";

import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const BoilerplateBlogPost: React.FC<{}> = () => (
  <BlogContainer blogManifest={{ ...blogManifest, hero }}>
    <div>I'm a blog post</div>
  </BlogContainer>
);
export default BoilerplateBlogPost;
