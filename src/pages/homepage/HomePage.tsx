import React from "react";
import styled from "styled-components";

import { About } from "./About";
import { NavigationFooter } from "../../components/Navigation/NavigationFooter";
import { EventsArea } from "../../components/Events/EventsArea/EventsArea";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { NewOnTheBlog } from "./NewOnTheBlog";

const Container = styled("div")``;

// LATEST BLOG START
// LATEST BLOG END

export const HomePage = (): React.ReactElement => (
  <Container>
    <Hero />
    <About />
    <Services />
    <EventsArea />
    <NewOnTheBlog />
    <NavigationFooter />
  </Container>
);
