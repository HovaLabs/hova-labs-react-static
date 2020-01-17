import React from "react";
import styled from "styled-components";
import { Text } from "@hova-labs/bento-box-web";
import hovalin from "../media/hovalin-64.jpg";
import theHovas from "../media/the-hovas.png";

const Container = styled("div")``;

// HERO START
const HeroContainer = styled("div")`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled("div")`
  position: absolute;
  color: ${p => p.theme.colors.primary};
  ${p =>
    p.theme.responsiveStyle("font-size", {
      s: "50px",
      l: "100px",
    })}
`;

const Hero = styled("img").attrs({ src: hovalin })`
  width: 100%;
  min-width: 600px;
  background-position: center center;
  background-repeat: no-repeat;
`;
// HERO END

// ABOUT START
const AboutContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("margin-top", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

const AboutImageContainer = styled("div")`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutImageFiller = styled("div")`
  flex: 1;
`;

const AboutImage = styled("img").attrs({ src: theHovas })`
  width: 100%;
  flex: 1;
  min-width: 500px;
  background-position: center center;
  background-repeat: no-repeat;
`;

const AboutTextContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("position", {
      s: "relative",
      l: "absolute",
    })}
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xxl}px`,
    })}
  padding-bottom: 0;
`;
// ABOUT END

// SERVICES START
const ServicesContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("margin-top", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xxl}px`,
    })}
  background-color: ${p => p.theme.colors.backgroundTertiary};
`;

const ServicesTextContainer = styled("div")``;

const ServiceGridContainer = styled("div")`
  padding-top: ${p => p.theme.spacings.xl}px;
  display: grid;
  ${p =>
    p.theme.responsiveStyle("grid-template-columns", {
      s: "1fr",
      l: "1fr 1fr",
    })}
  ${p =>
    p.theme.responsiveStyle("grid-gap", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
`;

const ServiceGridItem = styled("div")``;

type Service = {
  icon: string;
  title: string;
  description: string;
  linkTitle: string;
  linkHref: string;
};
const services: Array<Service> = [
  {
    icon: "robot",
    title: "Firmware & Electronics",
    description:
      "From Arduino to Raspberry Pi, Teensy to AtMega, we've gotten our hands dirty in our fair share of firmware and electronics.",
    linkTitle: "Find out more",
    linkHref: "http://www.zombo.com",
  },
  {
    icon: "html-div",
    title: "Web Development",
    description:
      "We've always had a passion for turning a message into reality.",
    linkTitle: "Find out more",
    linkHref: "http://www.zombo.com",
  },
  {
    icon: "cube",
    title: "3D Printing",
    description:
      "Since 2012 we've been exploring the world of 3d printing and CAD. We love FDM, Fusion360, and OpenSCAD, to name a few.",
    linkTitle: "Find out more",
    linkHref: "http://www.zombo.com",
  },
  {
    icon: "magic",
    title: "UX & Design Systems",
    description:
      "The number one rule of software is DRY - Don't Repeat Yourself. We love making beautiful and reusable tools for designing websites",
    linkTitle: "Find out more",
    linkHref: "http://www.zombo.com",
  },
];
// SERVICES END

// EVENTS START
type Event = {
  date: string;
  location: string;
  description: string;
};

const events: Array<Event> = [
  {
    date: "2020-02-04T00:00:00.000Z",
    location: "Anytown, USA",
    description: "Light Show",
  },
  {
    date: "2020-04-20T00:00:00.000Z",
    location: "Berkeley, CA",
    description: "Woot Woot!",
  },
  {
    date: "2020-04-21T00:00:00.000Z",
    location: "Berkeley, CA",
    description: "Nope Nope!",
  },
];

const EventContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("margin-top", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xl}px`,
    })}
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xxl}px`,
    })}
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

const EventsTextContainer = styled("div")``;
const EventsTableContainer = styled("div")`
  padding-top: ${p => p.theme.spacings.xl}px;
`;
const EventsGrid = styled("div")`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: ${p => p.theme.spacings.l}px;
`;

const EventGridDateBox = styled("div")(p => ({
  display: "flex",
  flexDirection: "column",
  padding: `${p.theme.spacings.l}px`,
  background: p.theme.colors.backgroundTertiary,
}));

const EventGridInfoBox = styled("div")(p => ({
  display: "flex",
  flexDirection: "column",
  padding: `${p.theme.spacings.l}px`,
  background: p.theme.colors.primary,
}));

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
// EVENTS END

// LATEST BLOG START
// LATEST BLOG END

// COPYRIGHT START
// COPYRIGHT END

export default (): React.ReactElement => (
  <Container>
    <HeroContainer>
      <HeroText>HOVA LABS</HeroText>
      <Hero />
    </HeroContainer>
    <AboutContainer>
      <AboutTextContainer>
        <div>
          <Text typography="headingSmall">ABOUT</Text>
        </div>
        <div>
          <Text typography="headingLarge">The Hovas</Text>
        </div>
        <div style={{ maxWidth: 300 }}>
          <Text>
            We are two Nebraska nerds currently living in the SF Bay Area who
            use diverse backgrounds in art and science to buld scalable
            projects.
          </Text>
        </div>
      </AboutTextContainer>
      <AboutImageContainer>
        <AboutImageFiller />
        <AboutImage />
      </AboutImageContainer>
    </AboutContainer>
    <ServicesContainer>
      <ServicesTextContainer>
        <div>
          <Text typography="headingSmall">SERVICES</Text>
        </div>
        <div>
          <Text typography="headingLarge">What We Do</Text>
        </div>
      </ServicesTextContainer>
      <ServiceGridContainer>
        {services.map(s => (
          <ServiceGridItem key={s.title}>
            <div>
              <Text typography="headingMedium">{s.title}</Text>
            </div>
            <div>
              <Text>{s.description}</Text>
            </div>
          </ServiceGridItem>
        ))}
      </ServiceGridContainer>
    </ServicesContainer>
    <EventContainer>
      <EventsTextContainer>
        <div>
          <Text typography="headingSmall">EVENTS</Text>
        </div>
        <div>
          <Text typography="headingLarge">Say Hey</Text>
        </div>
      </EventsTextContainer>
      <EventsTableContainer>
        {events.length ? (
          <EventsGrid>
            {events.map(event => (
              <React.Fragment key={event.date}>
                <EventGridDateBox>
                  <div>
                    <Text typography="headingSmall">
                      {(new Date(event.date).getDate() + 1)
                        .toString()
                        .padStart(2, "0")}
                    </Text>
                  </div>
                  <div>
                    <Text typography="headingSmall">
                      {months[new Date(event.date).getMonth()]}
                    </Text>
                  </div>
                </EventGridDateBox>
                <EventGridInfoBox>
                  <div>
                    <Text typography="headingMedium" color="backgroundPrimary">
                      {event.location}
                    </Text>
                  </div>
                  <div>
                    <Text>{event.description}</Text>
                  </div>
                </EventGridInfoBox>
              </React.Fragment>
            ))}
          </EventsGrid>
        ) : (
          <div>
            <Text>No events at this time...</Text>
          </div>
        )}
      </EventsTableContainer>
    </EventContainer>
  </Container>
);
