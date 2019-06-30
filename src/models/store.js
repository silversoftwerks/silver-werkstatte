import PropTypes from "prop-types";
const now = new Date();

const userTable = [
  { id: 0, role: "Admin", bookings: [] },
  { id: 1, role: "guest", bookings: [0] }
];

const bookingInterface = {
  id: PropTypes.number.isRequired,
  date: PropTypes.shape(dateInterface),
  room: PropTypes.shape(roomInterface),
  guests: PropTypes.arrayOf(userInterface)
};
const dateFactory = date => ({
  label: date.toDateString(),
  value: date
});
const dateTable = [...new Array(20).fill(0)].map((zero, index) => ({
  id: index,
  ...dateFactory(addDays(now, index))
}));
const roomTable = [
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
const buildingTable = [
  {
    id: 0,
    name: "Silver Haus",
    rooms: [0]
  }
];
const bookingsTable = [{ id: 0, dates: [1, 2], room: 0, guests: [0] }];
const holidayTable = [
  {
    id: 0,
    name: "Leif Erikson Day",
    date: addDays(now, 10),
    increase: 0.1
  }
];

const dateInterface = {
  label: PropTypes.string.isRequired,
  value: PropTypes.Date,
  holidays: PropTypes.arrayOf(holidayInterface)
};

const buildingInterface = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  maxOccupancy: () =>
    this.rooms.reduce(
      (prev, { maxOccupancy } = curr) => prev + maxOccupancy,
      0
    ),
  rooms: PropTypes.arrayOf(roomInterface).isRequired
};

const roomInterface = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  maxOccupancy: PropTypes.number.isRequired,
  beds: PropTypes.arrayOf(bedInterface).isRequired,
  squareFootage: PropTypes.number.isRequired,
  rate: PropTypes.shape(rateInterface).isRequired,
  holidays: PropTypes.arrayOf(holidayInterface).isRequired
};
const bedInterface = {
  id: PropTypes.number.isRequired,
  size: PropTypes.oneOf(["king", "queen", "twin"]).isRequired
};
const userInterface = {
  id: PropTypes.number.isRequired,
  role: PropTypes.oneOf(["Admin", "Member", "Guest"]),
  bookings: PropTypes.arrayOf(bookingInterface)
};

const rateInterface = { base: PropTypes.number.isRequired };
const holidayInterface = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.shape(dateInterface).isRequired,
  increase: PropTypes.number.isRequired
};
function addDays(date, days) {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
}

//turns db into fe store
export const store = {
  dates: dateTable,
  holidays: holidayTable,
  buildings: buildingTable,
  bookings: bookingsTable,
  rooms: roomTable,
  users: userTable
};
