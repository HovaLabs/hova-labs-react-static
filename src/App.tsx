import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";
import { DesignSystemProvider } from "@hova-labs/bento-box-web";
import { GlobalStyle, TopNavigation } from "./components";
import { themes } from "./theme";

// helper function to make window scroll to the top when the route changes
export const ScrollToTop: React.FC<{
  children: React.ReactNode;
  location: typeof window.location;
  path?: string;
}> = ({ children, location }) => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return <>{children}</>;
};
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

const App: React.FC<{}> = () => {
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
            <Router>
              <ScrollToTop location={window.location} path="/">
                <Routes path="*" />
              </ScrollToTop>
            </Router>
          </React.Suspense>
        </div>
      </DesignSystemProvider>
    </Root>
  );
};

export default App;
