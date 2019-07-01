import React, { useState } from "react";
import Text from "@SS/design-system/src/components/typography/Text";
import { Button } from "@SS/design-system/src/components/interactives/Button";
import { colors } from "./colors";
export const CallToActionButton = ({ onClick, label, fill }) => {
  const [mouseDown, setMouseDown] = useState(false);
  return (
    <Button
      backgroundColor={mouseDown ? "transparent" : colors.pink}
      border={`2px solid ${colors.pink}`}
      outline="none"
      color={mouseDown ? colors.pink : colors.white}
      mouseDown={mouseDown}
      onPointerDown={() => setMouseDown(state => true)}
      onPointerUp={() => setMouseDown(state => false)}
      onMouseDown={() => setMouseDown(state => true)}
      onMouseUp={() => setMouseDown(state => false)}
      onClick={onClick}
      fill={fill}
    >
      <Text>{label}</Text>
    </Button>
  );
};
