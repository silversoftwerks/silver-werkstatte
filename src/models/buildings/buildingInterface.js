import PropTypes from "prop-types";
import { roomInterface } from "../rooms/roomInterface";
const buildingInterface = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  maxOccupancy: () =>
    this.rooms.reduce(
      (prev, { maxOccupancy } = curr) => prev + maxOccupancy,
      0
    ),
  rooms: PropTypes.arrayOf(roomInterface).isRequired,
  picture: PropTypes.string.isRequired
};
