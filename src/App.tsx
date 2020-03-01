import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";
import { DesignSystemProvider } from "@hova-labs/bento-box-web";
import { GlobalStyle, TopNavigation } from "./components";
import { themes } from "./theme";
import "./global.css";

// helper function to make window scroll to the top when the route changes
export const ScrollToTop = ({
  children,
  location,
}: {
  children: React.ReactNode;
  location: typeof window.location;
  path?: string;
}): any => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return children;
};
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App(): React.ReactElement {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <Root>
      <DesignSystemProvider themes={themes}>
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <GlobalStyle />
            <TopNavigation />
            <div id="hova-labs-scrollable-content">
              <Router>
                <ScrollToTop location={window.location} path="/">
                  <Routes path="*" />
                </ScrollToTop>
              </Router>
            </div>
          </React.Suspense>
        </div>
      </DesignSystemProvider>
    </Root>
  );
}

export default App;
