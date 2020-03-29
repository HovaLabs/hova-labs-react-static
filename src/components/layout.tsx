import React from "react";
import { DesignSystemProvider } from "@hova-labs/bento-box-web";

import { GlobalStyle, TopNavigation } from ".";
import { themes } from "../theme";

const Layout: React.FC = ({ children }) => (
  <DesignSystemProvider themes={themes}>
    <GlobalStyle />
    <TopNavigation />
    {children}
  </DesignSystemProvider>
);

export default Layout;
