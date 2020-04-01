import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { events } from "./EventsAreaUtils";
import { TitlePrimary } from "../../Title/TitlePrimary/TitlePrimary";

import {
  EventListInnerContainer,
  EventListOuterContainer,
  OuterContainer,
} from "./EventsAreaStyles";
import { ContainerWithBorder } from "../../Container/ContainerWithBorder";
import EventsListItem from "../EventsListItem/EventsListItem";

export const EventsArea: React.FC<{}> = () => {
  // CONSTANTS
  const eventsList = events.map((event) => <EventsListItem event={event} />);
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
        <TitlePrimary subtitle="Events" title="Say Hey" />
        <EventListOuterContainer>{content}</EventListOuterContainer>
      </OuterContainer>
    </ContainerWithBorder>
  );
};
