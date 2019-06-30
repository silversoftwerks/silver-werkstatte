import PropTypes from "prop-types";
import { holidayInterface } from "../holidays/holidayInterface";
import { bedInterface } from "../beds/bedInterface";
import { rateInterface } from "../rateInterface";
export const roomInterface = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  maxOccupancy: PropTypes.number.isRequired,
  beds: PropTypes.arrayOf(bedInterface).isRequired,
  squareFootage: PropTypes.number.isRequired,
  rate: PropTypes.shape(rateInterface).isRequired,
  holidays: PropTypes.arrayOf(holidayInterface).isRequired
};
