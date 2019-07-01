import React from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import { colors } from "./colors";
export const OutlineBox = ({ color = colors.blue, ...rest }) => (
  <Box
    border={`1px solid ${color}`}
    boxShadow="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    {...rest}
  />
);
