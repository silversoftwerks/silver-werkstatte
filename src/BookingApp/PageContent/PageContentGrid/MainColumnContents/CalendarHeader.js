import React from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import Billboard from "@SS/design-system/src/components/typography/Billboard";
import { colors } from "./../../../../designSystem/colors";
export const CalendarHeader = ({ size }) => (
  <Box
    paddingVertical="16px"
    justifyContent="center"
    alignItems="center"
    flexDirection={size.phone ? "column" : "row"}
  >
    <Box
      height={size.phone ? "unset" : "100%"}
      borderRight={size.phone ? "unset" : `5px solid ${colors.orange}`}
      borderBottom={size.phone ? `5px solid ${colors.orange}` : "unset"}
      justifyContent="center"
      alignItems="center"
    >
      <Billboard flexDirection={"row"} textAlign="center" color={colors.blue}>
        Learn{" "}
      </Billboard>
    </Box>

    <Box
      height={size.phone ? "unset" : "100%"}
      borderRight={size.phone ? "unset" : `5px solid ${colors.pink}`}
      borderBottom={size.phone ? `5px solid ${colors.pink}` : "unset"}
      justifyContent="center"
      alignItems="center"
    >
      <Billboard flexDirection={"row"} textAlign="center" color={colors.blue}>
        Learn{" "}
      </Billboard>
    </Box>
    <Box justifyContent="center" alignItems="center">
      {" "}
      <Billboard flexDirection={"row"} textAlign="center" color={colors.blue}>
        Learn{" "}
      </Billboard>
    </Box>
  </Box>
);
