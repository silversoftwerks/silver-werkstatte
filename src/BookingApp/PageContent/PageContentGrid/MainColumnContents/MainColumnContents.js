import React, { Fragment } from "react";
import { Calendar } from "./Calendar/Calendar";
import { BuildingsRoomsList } from "./BuildingsRoomsList/BuildingsRoomsList";
import { CalendarHeader } from "./CalendarHeader";
import { colors } from "./../../../../designSystem/colors";
import { OutlineBox } from "./../../../../designSystem/OutlineBox";
import Box from "@SS/design-system/src/components/layout/Box";
import fontStyles from "@SS/design-system/src/components/typography/fontStyles";

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
    <Box paddingVertical="16px">
      <OutlineBox
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
      </OutlineBox>
    </Box>
    <Box paddindVertical="16px">
      <Text {...fontStyles.sizes.xl} color={colors.blue}>
        Residences
      </Text>
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
