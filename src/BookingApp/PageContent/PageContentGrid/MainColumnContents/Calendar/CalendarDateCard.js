import React from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import Text from "@SS/design-system/src/components/typography/Text.jsx";
import { colors } from "../../../../../designSystem/colors";
import { Button } from "../../../../../designSystem/interactives/Button";

export const CalendarDateCard = ({ setState, pendingBooking, id, label }) => (
  <Button
    pressedColor={colors.white}
    backgroundColor={
      [pendingBooking.startDate, pendingBooking.endDate].includes(id)
        ? colors.blue
        : colors.white
    }
    border={`1px solid ${colors.blue}`}
    borderBottom={
      pendingBooking.startDate < id && id <= pendingBooking.endDate
        ? `16px solid ${colors.blue}`
        : `1px solid ${colors.blue}`
    }
    justifyContent="center"
    alignItems="center"
    height="100px"
    textAlign="center"
    overflow="hidden"
    paddingHorizontal="8px"
    onClick={() =>
      setState(state => ({
        ...state,
        control: {
          ...state.control,
          selectStartDate: !state.control.selectStartDate
        },
        pendingBooking: {
          ...state.pendingBooking,
          baseCost: !state.control.selectStartDate
            ? state.store.rooms[state.pendingBooking.room].rate.base *
              (!state.control.selectStartDate &&
                (state.pendingBooking.enddate != id
                  ? Math.max(id, state.pendingBooking.startDate) ==
                    state.pendingBooking.startDate
                    ? state.pendingBooking.startDate + 1
                    : Math.max(id, state.pendingBooking.startDate)
                  : state.pendingBooking.endDate) -
                  (state.control.selectStartDate &&
                  state.pendingBooking.startDate != id
                    ? id
                    : state.pendingBooking.startDate))
            : state.pendingBooking.baseCost,
          startDate:
            state.control.selectStartDate &&
            state.pendingBooking.startDate != id
              ? id
              : state.pendingBooking.startDate,
          endDate:
            !state.control.selectStartDate && state.pendingBooking.enddate != id
              ? Math.max(id, state.pendingBooking.startDate) ==
                state.pendingBooking.startDate
                ? state.pendingBooking.startDate + 1
                : Math.max(id, state.pendingBooking.startDate)
              : state.pendingBooking.endDate
        }
      }))
    }
    render={mouseDown => (
      <Text
        color={
          ![pendingBooking.startDate, pendingBooking.endDate].includes(id)
            ? mouseDown
              ? colors.blue
              : colors.blue
            : mouseDown
            ? colors.blue
            : colors.white
        }
      >
        {label}
      </Text>
    )}
  />
);
