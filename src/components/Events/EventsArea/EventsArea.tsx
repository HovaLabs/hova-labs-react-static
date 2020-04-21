import React from "react";
import { Text } from "../..";
import { events } from "./EventsAreaUtils";
import { TitlePrimary } from "../../Title/TitlePrimary/TitlePrimary";

import { EventListInnerContainer } from "./EventsAreaStyles";
import {
  ContainerWithBorder,
  ContainerFlex,
  ContainerContent,
} from "../../Container";
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
      <ContainerFlex>
        <ContainerContent flexXL="100">
          <TitlePrimary subtitle="Events" title="Say Hey" />
        </ContainerContent>
      </ContainerFlex>
      <ContainerFlex>
        <ContainerContent flexXL="100">{content}</ContainerContent>
      </ContainerFlex>
    </ContainerWithBorder>
  );
};
