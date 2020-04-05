/* eslint-disable */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react";
import { DesignSystemProvider } from "@hova-labs/bento-box-web";
import { GlobalStyle } from "./src/components";
import { themes } from "./src/theme";

export const wrapRootElement = ({ element }) => {
  return (
    <DesignSystemProvider themes={themes}>
      <GlobalStyle />
      {element}
    </DesignSystemProvider>
  );
};
