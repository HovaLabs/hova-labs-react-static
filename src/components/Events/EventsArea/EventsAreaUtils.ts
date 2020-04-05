// EVENTS LIST DATA
type Event = {
  date: Date;
  location: string;
  description: string;
};
export const events: Array<Event> = [
  {
    date: new Date("2020-04-27"),
    location: "Online",
    description: "Womxn Level Up Meetup",
    link: "https://www.meetup.com/Womxn-Level-Up/",
  },
];
