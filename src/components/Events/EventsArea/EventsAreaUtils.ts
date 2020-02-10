// EVENTS LIST DATA
type Event = {
  date: Date;
  location: string;
  description: string;
};
export const events: Array<Event> = [
  {
    date: new Date("2020-01-19"),
    location: "Anytown, USA",
    description: "Light Show",
  },
];
