import PropTypes from "prop-types";
import { holidayInterface } from "../holidays/holidayInterface";
export const dateInterface = {
  label: PropTypes.string.isRequired,
  value: PropTypes.Date,
  holidays: PropTypes.arrayOf(holidayInterface)
};
