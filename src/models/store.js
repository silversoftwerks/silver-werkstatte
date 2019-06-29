import PropTypes from "prop-types";

const buildings = [
  {
    id: 0,
    name: "Silver Haus",
    rooms: [
      {
        id: 0,
        name: "Master Bedroom",
        maxOccupancy: () =>
          this.beds.reduce(
            (prev, { maxOccupancy } = curr) => prev + maxOccupancy,
            0
          ),
        beds: [{ id: 0, size: "king", maxOccupancy: "2" }],
        squareFootage: 800,
        rate: {
          base: 100,
          daily: ({ date }) =>
            this.holidays.includes(date)
              ? (1 + holiday.date.dailyIncrease) * this.base
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
    ]
  }
];
const now = new Date();

const holidays = [
  {
    id: 0,
    name: "Leif Erikson Day",
    date: addDays(now, 10),
    increase: 0.1
  }
];
const calendar = {
  dates: [...new Array().fill(0)].map((zero, index) =>
    dateFactory(addDays(now, index))
  ),
  holidays
};
const dateFactory = date => ({
  label: date.toDateString(),
  value: date
});
const date = {
  label: PropTypes.string.isRequired,
  value: PropTypes.Date,
  holidays: PropTypes.arrayOf(holiday)
};

const building = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  maxOccupancy: () =>
    this.rooms.reduce(
      (prev, { maxOccupancy } = curr) => prev + maxOccupancy,
      0
    ),
  rooms: PropTypes.arrayOf(room).isRequired
};

const room = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  maxOccupancy: PropTypes.number.isRequired,
  beds: PropTypes.arrayOf(bed).isRequired,
  squareFootage: PropTypes.number.isRequired,
  rate: PropTypes.shape(rate).isRequired,
  holidays: PropTypes.arrayOf(holiday).isRequired
};
const bed = {
  id: PropTypes.number.isRequired,
  size: PropTypes.oneOf(["king", "queen", "twin"]).isRequired
};
const user = {
  role: PropTypes.oneOf(["Admin", "Member", "Guest"])
};
const rate = { base: PropTypes.number.isRequired };
const holiday = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.shape(date).isRequired,
  increase: PropTypes.number.isRequired
};
function addDays(date, days) {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
}
export const store = {
  buildings,
  calendar
};