import React from "react";
import styled from "styled-components";

import Layout from "../../components/layout";
import { About } from "./About";
import { NavigationFooter } from "../../components/Navigation/NavigationFooter";
import { EventsArea } from "../../components/Events/EventsArea/EventsArea";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { NewOnTheBlog } from "./NewOnTheBlog";
import SEO from "../../components/seo";

const Container = styled("div")``;

// LATEST BLOG START
// LATEST BLOG END

export const Homepage: React.FC<{}> = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Hero />
      <About />
      <Services />
      <EventsArea />
      <NewOnTheBlog />
      <NavigationFooter />
    </Container>
  </Layout>
);
