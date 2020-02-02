import React from "react";
import styled from "styled-components";

import { About } from "./About";
import { Copyright } from "./Copyright";
import { Events } from "./Events";
import { Hero } from "./Hero";
import { Services } from "./Services";

const Container = styled("div")``;

// LATEST BLOG START
// LATEST BLOG END

export const HomePage = (): React.ReactElement => (
  <Container>
    <Hero />
    <About />
    <Services />
    <Events />
    <Copyright />
  </Container>
);
