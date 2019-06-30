import React, { Fragment } from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import { Billboard } from "@SS/design-system/src/components/content/Billboard";
import Logo from "@SS/design-system/src/components/content/Logo";
import BillboardText from "@SS/design-system/src/components/typography/Billboard";
import { colors } from "../../designSystem/colors";
export const PageBillboard = () => (
  <Fragment>
    <Billboard
      paddingVertical="96px"
      backgroundImage='url("https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'
    >
      <Box
        fillHorizontal={false}
        paddingHorizontal="16px"
        flexDirection="column"
      >
        <Box width="unset" justifyContent="space-between" alignItems="center">
          {"SILVER".split("").map(char => (
            <BillboardText>{char}</BillboardText>
          ))}
        </Box>
        <Logo color={colors.white} accentColor={colors.blue} />

        <BillboardText color={colors.white}>WERKSTATTE</BillboardText>
      </Box>
    </Billboard>
  </Fragment>
);
