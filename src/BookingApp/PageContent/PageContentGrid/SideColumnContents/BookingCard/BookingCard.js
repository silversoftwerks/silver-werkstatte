import React, { Fragment } from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import { CallToActionButton } from "../../../../../designSystem/CallToActionButton";
import { colors } from "../../../../../designSystem/colors";
import {
  BaseCostText,
  TaxCostText,
  FeeCostText,
  TotalCostText
} from "./BaseCostText";

export const BookingCard = ({ pendingBooking, backgroundColor }) => (
  <Fragment>
    <Box padding="16px" flexDirection="column" flexDirection="column">
      <Box justifyContent="space-between">
        <BaseCostText
          color={
            [colors.blue, colors.lightBlue].includes(backgroundColor)
              ? "white"
              : colors.blue
          }
          baseCost={pendingBooking.baseCost}
        />
      </Box>

      <Box justifyContent="space-between">
        <TaxCostText
          color={
            [colors.blue, colors.lightBlue].includes(backgroundColor)
              ? "white"
              : colors.blue
          }
          baseCost={pendingBooking.baseCost}
        />
      </Box>
      <Box justifyContent="space-between">
        <FeeCostText
          color={
            [colors.blue, colors.lightBlue].includes(backgroundColor)
              ? "white"
              : colors.blue
          }
          baseCost={pendingBooking.baseCost}
        />
      </Box>
    </Box>
    <Box
      borderBottom={`5px solid ${
        [colors.blue, colors.lightBlue].includes(backgroundColor)
          ? "white"
          : colors.blue
      }`}
    />
    <Box justifyContent="space-between" padding="16px">
      <TotalCostText
        color={
          [colors.blue, colors.lightBlue].includes(backgroundColor)
            ? "white"
            : colors.blue
        }
        baseCost={pendingBooking.baseCost}
      />
    </Box>
    <CallToActionButton fill label={"Book Now"} />
  </Fragment>
);
