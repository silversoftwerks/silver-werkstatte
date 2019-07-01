import React, { Fragment } from "react";
import { Calendar } from "./Calendar/Calendar";
import { BuildingsRoomsList } from "./BuildingsRoomsList";
import { CalendarHeader } from "./CalendarHeader";
import { colors } from "./../../../../designSystem/colors";
import Box from "@SS/design-system/src/components/layout/Box";

export const MainColumnContents = ({
  dates,
  control: { selectStartDate },
  navigation: { dateIndex },
  pendingBooking,
  setState,
  buildings,
  rooms,
  beds,
  size
}) => (
  <Fragment>
    <CalendarHeader size={size} />

    <Box
      padding="16px"
      flexDirection="column"
      border={`1px solid ${colors.blue}`}
    >
      <Calendar
        dates={dates}
        selectStartDate={selectStartDate}
        pendingBooking={pendingBooking}
        setState={setState}
        dateIndex={dateIndex}
        size={size}
      />
    </Box>

    <BuildingsRoomsList
      pendingBooking={pendingBooking}
      buildings={buildings}
      rooms={rooms}
      beds={beds}
      setState={setState}
    />
  </Fragment>
);
