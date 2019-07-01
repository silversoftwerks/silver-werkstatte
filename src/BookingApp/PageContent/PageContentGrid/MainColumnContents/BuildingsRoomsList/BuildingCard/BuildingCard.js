import React from "react";
import Grid from "@SS/design-system/src/components/layout/Grid.jsx";
import Box from "@SS/design-system/src/components/layout/Box";
import { OutlineBox } from "../../../../../../designSystem/OutlineBox";
import { RoomCard } from "./RoomCard";
import { BuildingCardHeader } from "./BuildingCardHeader";

export const BuildingCard = ({
  name,
  address,
  pendingBooking,
  setState,
  buildingBeds,
  buildingRooms,
  allBeds
}) => (
  <OutlineBox flexDirection="column">
    <BuildingCardHeader
      name={name}
      address={address}
      buildingBeds={buildingBeds}
    />
    <Box padding="16px" flexDirection="column">
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
            <RoomCard
              roomName={roomName}
              roomBaseRate={roomBaseRate}
              pendingBooking={pendingBooking}
              setState={setState}
              isPendingBookingRoom={isPendingBookingRoom}
              maxOccupancy={maxOccupancy}
              roomId={roomId}
            />
          )
        )}
      </Grid>
    </Box>
  </OutlineBox>
);
