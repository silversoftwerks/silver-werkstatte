import { holidayInterface } from "../holidays/holidayInterface";
export const roomTable = [
  {
    id: 0,
    name: "Master Bedroom",
    beds: [0],
    squareFootage: 800,
    rate: {
      base: 100,
      daily: ({ date }) =>
        this.holidays.includes(date)
          ? (1 + holidayInterface.date.dailyIncrease) * this.base
          : this.base,
      weekly: ({ days, weeklyDiscount }) =>
        this.daily * days * (1 - weeklyDiscount),
      monthly: ({ days, monthlyDiscount }) =>
        this.daily * days * (1 - monthlyDiscount),
      currency: "USD"
    },
    applicableHolidays: [0, 1],
    bookedDates: [0, 1, 2],
    blockedDate: [3, 4]
  },
  {
    id: 1,
    name: "Basement Bedroom",
    beds: [1],
    squareFootage: 500,
    rate: {
      base: 70,
      daily: ({ date }) =>
        this.holidays.includes(date)
          ? (1 + holidayInterface.date.dailyIncrease) * this.base
          : this.base,
      weekly: ({ days, weeklyDiscount }) =>
        this.daily * days * (1 - weeklyDiscount),
      monthly: ({ days, monthlyDiscount }) =>
        this.daily * days * (1 - monthlyDiscount),
      currency: "USD"
    },
    applicableHolidays: [0, 1],
    bookedDates: [0, 1, 2],
    blockedDate: [3, 4]
  }
];
