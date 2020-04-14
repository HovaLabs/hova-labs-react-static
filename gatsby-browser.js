/* eslint-disable */  
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
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
