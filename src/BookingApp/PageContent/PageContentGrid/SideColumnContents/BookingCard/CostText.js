import React, { Fragment } from "react";
import Text from "@SS/design-system/src/components/typography/Text.jsx";
import fontStyles from "@SS/design-system/src/components/typography/fontStyles";
export const CostText = ({ color, baseCost, multiplier, label }) => (
  <Fragment>
    <Text color={color} {...fontStyles.sizes.xl}>
      {label}
    </Text>
    <Text color={color} {...fontStyles.sizes.xl}>
      ${Math.trunc(100 * baseCost * multiplier) / 100}
    </Text>
  </Fragment>
);
