// use this file for browser and ssr
import React from "react";
import { DesignSystemProvider } from "@hova-labs/bento-box-web";
import { themes } from "../theme";
import { GlobalStyle } from ".";
import "../styles/global.css";

export const Renderer: React.FC = ({ children }) => {
  return (
    <DesignSystemProvider themes={themes}>
      <GlobalStyle />
      {children}
    </DesignSystemProvider>
  );
};
