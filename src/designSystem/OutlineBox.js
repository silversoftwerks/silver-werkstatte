import React from "react";
import Box from "../BookingApp/PageContent/PageContentGrid/SideColumnContents/node_modules/@SS/design-system/src/components/layout/Box";
import { colors } from "./colors";
const OutlineBox = ({ ...rest }) => (
  <Box
    padding="32px"
    border={`1px solid ${colors.blue}`}
    alignItems="center"
    justifyContent="space-between"
    {...rest}
  />
);
