import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";
import { DesignSystemProvider } from "@hova-labs/bento-box-web";
import { GlobalStyle, TopNavigation, WebsiteContainer } from "./components";
import { themes } from "./theme";
import "./global.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App(): React.ReactElement {
  return (
    <Root>
      <DesignSystemProvider themes={themes}>
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <GlobalStyle />
            <TopNavigation />
            <WebsiteContainer>
              <Router>
                <Routes path="*" />
              </Router>
            </WebsiteContainer>
          </React.Suspense>
        </div>
      </DesignSystemProvider>
    </Root>
  );
}

export default App;
