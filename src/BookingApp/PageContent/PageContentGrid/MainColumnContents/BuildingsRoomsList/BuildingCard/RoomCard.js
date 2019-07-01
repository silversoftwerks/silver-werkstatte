import React from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import Text from "@SS/design-system/src/components/typography/Text.jsx";
import { colors } from "../../../../../../designSystem/colors";
export const RoomCard = ({
  setState,
  isPendingBookingRoom,
  pendingBooking,
  maxOccupancy,
  roomName,
  roomBaseRate,
  roomId
}) => (
  <Box
    padding="32px"
    border={`1px solid ${colors.blue}`}
    alignItems="center"
    justifyContent="space-between"
    backgroundColor={isPendingBookingRoom ? colors.blue : colors.white}
    onClick={() =>
      setState(state => ({
        ...state,
        pendingBooking: {
          ...state.pendingBooking,
          baseCost: !isPendingBookingRoom
            ? roomBaseRate * (pendingBooking.endDate - pendingBooking.startDate)
            : state.pendingBooking.baseCost,
          room: roomId
        }
      }))
    }
  >
    <Box flexGrow="2" flexDirection="column">
      <Text color={isPendingBookingRoom ? "white" : colors.blue}>
        {roomName}
      </Text>
      <Text color={isPendingBookingRoom ? "white" : colors.blue}>
        {maxOccupancy} Guests
      </Text>
    </Box>
    <Box flex="1" alignItems="center" justifyContent="flex-end">
      <Text color={isPendingBookingRoom ? "white" : colors.blue}>
        Cost $
        {roomBaseRate * (pendingBooking.endDate - pendingBooking.startDate)}
      </Text>
    </Box>
  </Box>
);
