/* eslint-disable */  
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react";
import { DesignSystemProvider } from "@hova-labs/bento-box-web";
import { themes } from './src/theme';
import "./src/styles/global.css"

const StateKicker = ({ children }) => {
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    setInitialized(true);
  }, []);

  if (!initialized) {
    return null;
  }
  return children;
}
export const wrapRootElement = ({ element }) => {
  return (
    // <StateKicker>
      <DesignSystemProvider themes={themes}>
        {element}
      </DesignSystemProvider>
    // </StateKicker>
  );
};
