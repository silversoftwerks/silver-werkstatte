import PropTypes from "prop-types";
import { userInterface } from "../users/userInterface";
import { roomInterface } from "../rooms/roomInterface";
import { dateInterface } from "../dates/dateInterface";
export const bookingInterface = {
  id: PropTypes.number.isRequired,
  date: PropTypes.shape(dateInterface),
  room: PropTypes.shape(roomInterface),
  guests: PropTypes.arrayOf(userInterface)
};
