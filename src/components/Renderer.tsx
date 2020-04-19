// use this file for browser and ssr
import React from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import { DesignSystemProvider } from "@hova-labs/bento-box-web";
import { themes } from "../theme";
import { GlobalStyle, TopNavigation } from ".";
import "../styles/global.css";

export const Renderer: React.FC = ({ children }) => {
  const [initialized, setInitialized] = React.useState<boolean>(false);
  React.useEffect(() => {
    setInitialized(true);
  }, []);

  return (
    <DesignSystemProvider themes={themes}>
      <ThemeContext.Consumer>
        {(theme) => (
          <ThemeProvider theme={{ ...theme, initialized }}>
            <GlobalStyle />
            <TopNavigation />
            {children}
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </DesignSystemProvider>
  );
};
