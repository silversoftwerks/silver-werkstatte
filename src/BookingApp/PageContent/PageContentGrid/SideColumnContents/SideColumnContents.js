import React from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import { BookingCard } from "./BookingCard/BookingCard";
import { colors } from "../../../../designSystem/colors";
export const SideColumnContents = ({ pendingBooking }) => (
  <Box
    padding="32px"
    border={`1px solid ${colors.blue}`}
    backgroundColor={colors.blue}
    alignItems="flex-end"
    flexDirection="column"
  >
    <BookingCard
      backgroundColor={colors.blue}
      pendingBooking={pendingBooking}
    />
  </Box>
);
