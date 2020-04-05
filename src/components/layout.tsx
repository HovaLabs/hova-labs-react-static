import React from "react";
import { DesignSystemProvider } from "@hova-labs/bento-box-web";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import { NavigationFooter } from "./Navigation/NavigationFooter";
import favicon from "../media/Meta/favicon.png";
import metaPic from "../media/Meta/metaPic.jpg";

import { GlobalStyle, TopNavigation } from ".";
import { themes } from "../theme";

const Layout: React.FC = ({ children }) => {
  ReactGA.initialize("UA-162830088-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <DesignSystemProvider themes={themes}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="shortcut icon" href={favicon} />
        {/* META */}
        <title>HOVA LABS</title>
        <meta name="description" content="Professional Prototypers" />
        <meta
          name="keywords"
          content="hova, hova violin, hova design systems, design systems, bentobox, hovalin, synesthesia, synesthesia network, hova labs, the hovas, 3d printable violin, 3d violin, 3d printed violin"
        />
        <meta name="author" content="The Hovas" />
        {/* FACEBOOK META */}
        <meta property="og:title" content="Hova Labs" />
        <meta property="og:image" content={metaPic} />
        <meta property="og:description" content="Professional Prototypers" />
        {/* TWITTER META */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Hova Labs" />
        <meta name="twitter:description" content="Professional Prototypers" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:image" content={metaPic} />
      </Helmet>
      <GlobalStyle />
      <TopNavigation />
      {children}
      <NavigationFooter />
    </DesignSystemProvider>
  );
};

export default Layout;
