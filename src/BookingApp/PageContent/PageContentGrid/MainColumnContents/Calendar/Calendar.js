import React, { Fragment } from "react";
import Grid from "@SS/design-system/src/components/layout/Grid.jsx";
import Column from "@SS/design-system/src/components/layout/Column.jsx";
import Text from "@SS/design-system/src/components/typography/Text.jsx";
import Box from "@SS/design-system/src/components/layout/Box";

import { CalendarDateCard } from "./CalendarDateCard";

export const Calendar = ({
  selectStartDate,
  pendingBooking,
  setState,
  dateIndex,
  dates,
  size
}) => (
  <Box paddingVertical="16px" flexDirection="column">
    <Text>{selectStartDate ? "Select Start Date" : "Select End Date"}</Text>
    <Grid columns={size.phone ? 3 : 7} gridGap="16px">
      {dates.slice(dateIndex, dateIndex + 14).map(({ label, id, ...rest }) => (
        <Column>
          <CalendarDateCard
            label={label}
            id={id}
            pendingBooking={pendingBooking}
            setState={setState}
          />
        </Column>
      ))}
    </Grid>
  </Box>
);
