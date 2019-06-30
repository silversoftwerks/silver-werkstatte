import React, { Fragment } from "react";
import Grid from "@SS/design-system/src/components/layout/Grid.jsx";
import Box from "@SS/design-system/src/components/layout/Box";
import Text from "@SS/design-system/src/components/typography/Text.jsx";
import { Header } from "@SS/design-system/src/components/typography/Header";
import { colors } from "../../../../designSystem/colors";
import fontStyles from "@SS/design-system/src/components/typography/fontStyles";
export const BuildingsRoomsList = ({
  buildings,
  rooms,
  allRooms = rooms,
  beds,
  allBeds = beds,
  pendingBooking,
  setState
}) => (
  <Box paddingVertical="16px">
    {buildings.map(
      ({
        name,
        address,
        rooms,
        roomIds = rooms,
        buildingRooms = roomIds.map(roomId => allRooms[roomId]),
        buildingBeds = buildingRooms
          .reduce((prev, { beds }) => [...prev, beds], [])
          .map(bedId => allBeds[bedId])
      }) => (
        <Box flexDirection="column">
          <Box paddingVertical="16px" flexDirection="column">
            <Box>
              <Text {...fontStyles.sizes.xl} color={colors.blue}>
                {name}
              </Text>
            </Box>
            <Text color={colors.blue}>
              Max Guests{" "}
              {buildingBeds.reduce(
                (prev, { maxOccupancy }) => prev + maxOccupancy,
                0
              )}
            </Text>
            {address.split(",").map(addressLine => (
              <Text color={colors.blue}>{addressLine}</Text>
            ))}
          </Box>
          <Box flexDirection="column">
            <Grid columns={1} gridGap="16px" width="100%">
              {buildingRooms.map(
                ({
                  id,
                  name,
                  roomId = id,
                  roomName = name,
                  rate: { base },
                  roomBaseRate = base,
                  beds,
                  bedIds = beds,
                  roomBeds = bedIds.map(bedId => allBeds[bedId]),
                  maxOccupancy = roomBeds.reduce(
                    (prev, { maxOccupancy }) => prev + maxOccupancy,
                    0
                  ),
                  isPendingBookingRoom = pendingBooking.room == roomId
                }) => (
                  <Box
                    padding="32px"
                    border={`1px solid ${colors.blue}`}
                    alignItems="center"
                    justifyContent="space-between"
                    backgroundColor={
                      isPendingBookingRoom ? colors.blue : colors.white
                    }
                    onClick={() =>
                      setState(state => ({
                        ...state,
                        pendingBooking: {
                          ...state.pendingBooking,
                          baseCost: !isPendingBookingRoom
                            ? roomBaseRate *
                              (pendingBooking.endDate -
                                pendingBooking.startDate)
                            : state.pendingBooking.baseCost,
                          room: roomId
                        }
                      }))
                    }
                  >
                    <Box flexDirection="column">
                      <Text
                        color={isPendingBookingRoom ? "white" : colors.blue}
                      >
                        {roomName}
                      </Text>
                      <Text
                        color={isPendingBookingRoom ? "white" : colors.blue}
                      >
                        {maxOccupancy} Guests
                      </Text>
                    </Box>
                    <Box alignItems="center" justifyContent="flex-end">
                      <Text
                        color={isPendingBookingRoom ? "white" : colors.blue}
                      >
                        Cost $
                        {roomBaseRate *
                          (pendingBooking.endDate - pendingBooking.startDate)}
                      </Text>
                    </Box>
                  </Box>
                )
              )}
            </Grid>
          </Box>
        </Box>
      )
    )}
  </Box>
);
