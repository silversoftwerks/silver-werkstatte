import React, { Fragment } from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import { Header } from "@SS/design-system/src/components/typography/Header";
import { BuildingCard } from "./BuildingCard/BuildingCard";
import Grid from "@SS/design-system/src/components/layout/Grid.jsx";

export const BuildingsRoomsList = ({
  buildings,
  rooms,
  allRooms = rooms,
  beds,
  allBeds = beds,
  pendingBooking,
  setState
}) => (
  <Box flexDirection="column" paddingVertical="16px">
    <Grid gridGap="16px">
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
          <BuildingCard
            name={name}
            pendingBooking={pendingBooking}
            setState={setState}
            address={address}
            buildingBeds={buildingBeds}
            buildingRooms={buildingRooms}
            allBeds={allBeds}
            allRooms={allRooms}
          />
        )
      )}
    </Grid>
  </Box>
);
