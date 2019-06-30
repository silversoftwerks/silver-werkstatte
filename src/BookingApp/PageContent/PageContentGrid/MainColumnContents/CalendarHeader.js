import React from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import Billboard from "@SS/design-system/src/components/typography/Billboard";
import { colors } from "./../../../../designSystem/colors";
export const CalendarHeader = ({}) => (
  <Box paddingVertical="16px" justifyContent="center" alignItems="center">
    <Billboard textAlign="center" color={colors.blue}>
      Book your next adventure
    </Billboard>
  </Box>
);
