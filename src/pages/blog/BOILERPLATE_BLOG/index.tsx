import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import blogManifest from "./manifest.json";
import { BlogContainer } from "../../../components/BlogContainer";

export default (): React.ReactElement => (
  <BlogContainer author={blogManifest.author}>
    <div>
      <Text>I'm a blog post</Text>
    </div>
  </BlogContainer>
);
