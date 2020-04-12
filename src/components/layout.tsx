import React from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import { TopNavigation } from "./TopNavigation";
import { NavigationFooter } from "./Navigation/NavigationFooter";
import favicon from "../media/Meta/favicon.png";
import metaPic from "../media/Meta/metaPic.jpg";
import { GlobalStyle } from ".";

const Layout: React.FC = ({ children }) => {
  const [initialized, setInitialized] = React.useState<boolean>(false);
  if (typeof window !== "undefined") {
    ReactGA.initialize("UA-162830088-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  React.useEffect(() => {
    setInitialized(true);
  }, []);

  return (
    <>
      <GlobalStyle initialized={initialized} />
      <Helmet>
        {/* FONTS */}
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        {/* FAVICON */}
        <link rel="icon" href={favicon} type="image/gif" />
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
      <TopNavigation />
      {children}
      <NavigationFooter />
    </>
  );
};

export default Layout;
