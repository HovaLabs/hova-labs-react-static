import React from "react";
import { DesignSystemProvider } from "@hova-labs/bento-box-web";
import { Helmet } from "react-helmet";

import { GlobalStyle, TopNavigation } from ".";
import { themes } from "../theme";

const Layout: React.FC = ({ children }) => (
  <DesignSystemProvider themes={themes}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
    <GlobalStyle />
    <TopNavigation />
    {children}
  </DesignSystemProvider>
);

export default Layout;
