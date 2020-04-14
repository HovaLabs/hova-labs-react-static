/* eslint-disable */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react";
import { Renderer } from './src/components/Renderer';

export const wrapRootElement = ({ element }) => {
  return (
    <Renderer>
      {element}
    </Renderer>
  );
};
