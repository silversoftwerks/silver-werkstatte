import PropTypes from "prop-types";
import { bookingInterface } from "../bookings/bookingInterface";
export const userInterface = {
  id: PropTypes.number.isRequired,
  role: PropTypes.oneOf(["Admin", "Member", "Guest"]),
  bookings: PropTypes.arrayOf(bookingInterface)
};
