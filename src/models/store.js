import { userTable } from "./users/userTable";
import { holidayTable } from "./holidays/holidayTable";
import { bookingTable } from "./bookings/bookingTable";
import { buildingTable } from "./buildings/buildingTable";
import { roomTable } from "./rooms/roomTable";
import { dateTable } from "./dates/dateTable";
import { bedTable } from "./beds/bedTable";

//turns db into fe store
export const store = {
  dates: dateTable,
  holidays: holidayTable,
  buildings: buildingTable,
  bookings: bookingTable,
  rooms: roomTable,
  beds: bedTable,
  users: userTable
};
