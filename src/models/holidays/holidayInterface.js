import PropTypes from "prop-types";
import { dateInterface } from "../dates/dateInterface";
export const holidayInterface = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.shape(dateInterface).isRequired,
  increase: PropTypes.number.isRequired
};
