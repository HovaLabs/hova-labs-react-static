/*
- getDay
- getMonth
*/

export const getDay = (date: Date): string => {
  return (date.getDate() + 1).toString().padStart(2, "0");
};

export const getMonth = (date: Date): string => {
  const monthsArray = [
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
  const monthIndex = date.getMonth();
  return monthsArray[monthIndex];
};
