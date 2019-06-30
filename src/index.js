import React from "react";
import ReactDOM from "react-dom";
import { BookingApp } from "./BookingApp/BookingApp";
import { defaultState } from "./BookingApp/state/defaultState";
import { Provider } from "./shared/Provider";

ReactDOM.render(
  <Provider
    defaultState={defaultState}
    render={([state, setState], [ref, size]) => (
      <BookingApp state={state} setState={setState} ref={ref} size={size} />
    )}
  />,
  document.getElementById("react-root")
);
