import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { events } from "./EventsAreaUtils";
import {
  EventListInnerContainer,
  EventListOuterContainer,
  OuterContainer,
} from "./EventsAreaStyles";
import { ContainerWithBorder } from "../../Containers/ContainerWithBorder";
import EventsListItem from "../EventsListItem/EventsListItem";

export const EventsArea = (): React.ReactElement => {
  // CONSTANTS
  const eventsList = events.map(event => <EventsListItem event={event} />);
  const content = events.length ? (
    <EventListInnerContainer>{eventsList}</EventListInnerContainer>
  ) : (
    <div>
      <Text>No events at this time...</Text>
    </div>
  );
  return (
    <ContainerWithBorder>
      <OuterContainer>
        <div>
          <Text typography="headingSmall">EVENTS</Text>
        </div>
        <div>
          <Text typography="headingLarge">Say Hey</Text>
        </div>
        <EventListOuterContainer>{content}</EventListOuterContainer>
      </OuterContainer>
    </ContainerWithBorder>
  );
};
