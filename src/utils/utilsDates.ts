const months: { [key: string]: string } = {
  "0": "January",
  "1": "February",
  "2": "March",
  "3": "April",
  "4": "May",
  "5": "June",
  "6": "July",
  "7": "August",
  "8": "September",
  "9": "October",
  "10": "November",
  "11": "December",
};

export const dateToString = (isoString: string): string => {
  const date = new Date(isoString);
  const monthInt = date.getMonth().toString();
  const month = months[monthInt];

  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};
