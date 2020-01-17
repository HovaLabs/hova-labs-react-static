import React from "react";
import styled from "styled-components";

import { About } from "./HomePage/About";
import { Copyright } from "./HomePage/Copyright";
import { Events } from "./HomePage/Events";
import { Hero } from "./HomePage/Hero";
import { Services } from "./HomePage/Services";

const Container = styled("div")``;

// LATEST BLOG START
// LATEST BLOG END

export default (): React.ReactElement => (
  <Container>
    <Hero />
    <About />
    <Services />
    <Events />
    <Copyright />
  </Container>
);
