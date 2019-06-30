import { addDays } from "../addDays";
export const now = new Date();

export const holidayTable = [
  {
    id: 0,
    name: "Leif Erikson Day",
    date: addDays(now, 10),
    increase: 0.1
  }
];
