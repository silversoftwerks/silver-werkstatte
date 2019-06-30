import React from "react";
import Box from "../BookingApp/PageContent/PageContentGrid/SideColumnContents/node_modules/@SS/design-system/src/components/layout/Box";
import { TextInput } from "@SS/design-system/src/components/form/fillables/TextInput";
import { colors } from "../designSystem/colors";
import { CallToActionButton } from "../designSystem/CallToActionButton";

export const SearchBar = ({}) => (
  <Box paddingVertical="16px" justifyContent="center" alignItems="center">
    <Box paddingRight="16px" justifyContent="center" alignItems="center">
      <TextInput
        width="100%"
        color={colors.blue}
        border={`2px solid ${colors.pink}`}
        outline="none"
        paddingRight="16px"
      />
    </Box>
    <CallToActionButton label={"Search"} />
  </Box>
);
