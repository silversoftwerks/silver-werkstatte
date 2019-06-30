import PropTypes from "prop-types";
export const bedInterface = {
  id: PropTypes.number.isRequired,
  size: PropTypes.oneOf(["king", "queen", "twin"]).isRequired
};
