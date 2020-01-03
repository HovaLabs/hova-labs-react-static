import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";
import { DesignSystemProvider } from "@hova-labs/bento-box-web";
import FancyDiv from "./components/FancyDiv";
import { TopNavigation, WebsiteContainer } from "./components";
import { themes } from "./theme";
import "./global.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <DesignSystemProvider themes={themes}>
        <WebsiteContainer>
          <TopNavigation />
          {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </nav> */}
          <div className="content">
            <FancyDiv>
              <React.Suspense fallback={<em>Loading...</em>}>
                <Router>
                  <Routes path="*" />
                </Router>
              </React.Suspense>
            </FancyDiv>
          </div>
        </WebsiteContainer>
      </DesignSystemProvider>
    </Root>
  );
}

export default App;
