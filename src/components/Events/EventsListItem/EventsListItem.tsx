import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { EventGridDateBox, EventGridInfoBox } from "./EventsListItemStyles";
import { getDay, getMonth } from "./EventsListItemUtils";

interface EventProps {
  event: {
    date: Date;
    description: string;
    location: string;
  };
}

const EventsListItem: React.FC<EventProps> = ({ event }) => (
  <React.Fragment key={event.date.toString()}>
    <EventGridDateBox>
      <div>
        <Text typography="headingSmall">{getDay(event.date)}</Text>
      </div>
      <div>
        <Text typography="headingSmall">{getMonth(event.date)}</Text>
      </div>
    </EventGridDateBox>
    <EventGridInfoBox>
      <div>
        <Text typography="headingSmall" color="onSurface">
          {event.location}
        </Text>
      </div>
      <div>
        <Text>{event.description}</Text>
      </div>
    </EventGridInfoBox>
  </React.Fragment>
);

export default EventsListItem;
