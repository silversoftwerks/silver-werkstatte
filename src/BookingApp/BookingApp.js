import React, { useState } from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import Page from "@SS/design-system/src/components/layout/Page";
import { PageBillboard } from "./PageBillboard/PageBillboard";
import { PageContent } from "./PageContent/PageContent";
import { useDimensions } from "../hooks/useDimensions";
export const BookingApp = ({
  state: {
    debug = false,
    store: { dates, holidays, buildings, rooms, beds, bookings, users },
    pendingBooking,
    navigation,
    control,
    authentication
  },
  setState,
  size,
  measureRef
}) => {
  return (
    <Page measureRef={measureRef}>
      {debug && <Box>JSON.stringify(store, null, 2)</Box>}
      <Box>
        <PageBillboard />
      </Box>
      <Box flexDirection="column" padding="16px">
        <PageContent
          size={size}
          setState={setState}
          buildings={buildings}
          pendingBookingRoom={rooms[pendingBooking.room]}
          rooms={rooms}
          dates={dates}
          beds={beds}
          pendingBooking={pendingBooking}
          navigation={navigation}
          control={control}
        />
      </Box>
    </Page>
  );
};
