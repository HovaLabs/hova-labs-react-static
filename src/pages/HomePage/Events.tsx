import React from "react";
import styled from "styled-components";
import { Text } from "@hova-labs/bento-box-web";

// EVENTS START
type Event = {
  date: string;
  location: string;
  description: string;
};

const events: Array<Event> = [
  // {
  //   date: "2020-02-04T00:00:00.000Z",
  //   location: "Anytown, USA",
  //   description: "Light Show",
  // },
  // {
  //   date: "2020-04-20T00:00:00.000Z",
  //   location: "Berkeley, CA",
  //   description: "Woot Woot!",
  // },
  // {
  //   date: "2020-04-21T00:00:00.000Z",
  //   location: "Berkeley, CA",
  //   description: "Nope Nope!",
  // },
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

export const Events = () => (
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
);
