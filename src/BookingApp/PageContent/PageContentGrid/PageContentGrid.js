import React from "react";
import Grid from "@SS/design-system/src/components/layout/Grid.jsx";
import Column from "@SS/design-system/src/components/layout/Column.jsx";
import Text from "@SS/design-system/src/components/typography/Text.jsx";
import { SideColumnContents } from "./SideColumnContents/SideColumnContents";
import { MainColumnContents } from "./MainColumnContents/MainColumnContents";

export const PageContentGrid = ({
  pendingBooking,
  dates,
  buildings,
  rooms,
  beds,
  setState,
  navigation,
  control,
  size
}) => (
  <Grid columns={size.desktop ? 4 : 3} gridGap="16px">
    <Column
      gridColumnStart="1"
      gridColumnEnd={size.phone ? 4 : size.desktop ? 4 : 3}
    >
      <MainColumnContents
        pendingBooking={pendingBooking}
        dates={dates}
        buildings={buildings}
        rooms={rooms}
        beds={beds}
        setState={setState}
        navigation={navigation}
        control={control}
      />
    </Column>
    <Column
      gridColumnStart={size.phone ? 1 : size.desktop ? 4 : 3}
      gridColumnEnd={size.desktop ? 5 : 4}
      paddingTop="112px"
    >
      <SideColumnContents pendingBooking={pendingBooking} />
    </Column>
  </Grid>
);
