import { getDay, getMonth } from "./EventsListItemUtils";
/*
Tests
- getDay
- getMonth
*/

const test1 = {
  input: new Date("2020-01-19"),
  day: "19",
  month: "JAN",
};

const test2 = {
  input: new Date("2020-12-20"),
  day: "20",
  month: "DEC",
};

describe("functions", () => {
  test("getDay", () => {
    expect(getDay(test1.input)).toBe(test1.day);
    expect(getDay(test2.input)).toBe(test2.day);
  });
  test("getMonth", () => {
    expect(getMonth(test1.input)).toBe(test1.month);
    expect(getMonth(test2.input)).toBe(test2.month);
  });
});
