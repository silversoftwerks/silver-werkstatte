import React from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import Text from "@SS/design-system/src/components/typography/Text.jsx";
import { colors } from "../../../../../../designSystem/colors";
import fontStyles from "@SS/design-system/src/components/typography/fontStyles";
export const BuildingCardHeader = ({ name, address, buildingBeds }) => (
  <Box
    padding="16px"
    flexDirection="column"
    backgroundImage="url(http://www.chaletmatsuzaka.com/2016/wordpress/wp-content/uploads/2015/12/Matsuzaka_Slide_11-1024x616.jpg)"
    backgroundSize="100%"
    backgroundPositionY="200px"
  >
    <Box>
      <Text
        {...fontStyles.sizes.xl}
        background="rgba(0,0,0,.6)"
        color={colors.white}
      >
        {name}
      </Text>
    </Box>
    <Text color={colors.white} background="rgba(0,0,0,.6)">
      Max Guests{" "}
      {buildingBeds.reduce((prev, { maxOccupancy }) => prev + maxOccupancy, 0)}
    </Text>
    {address.split(",").map(addressLine => (
      <Text color={colors.white} background="rgba(0,0,0,.6)">
        {addressLine}
      </Text>
    ))}
  </Box>
);
