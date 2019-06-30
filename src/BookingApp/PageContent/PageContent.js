import React, { Fragment } from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import { PageContentGrid } from "./PageContentGrid/PageContentGrid";

export const PageContent = ({
  pendingBooking,
  setState,
  buildings,
  beds,
  rooms,
  dates,
  state,
  navigation,
  control,
  size
}) => (
  <Fragment>
    <PageContentGrid
      size={size}
      pendingBooking={pendingBooking}
      setState={setState}
      buildings={buildings}
      rooms={rooms}
      beds={beds}
      dates={dates}
      state={state}
      navigation={navigation}
      control={control}
    />
  </Fragment>
);
