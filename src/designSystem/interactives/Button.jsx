import React, { useState } from "react";
import Text from "@SS/design-system/src/components/typography/Text";
import { Button as SilverButton } from "@SS/design-system/src/components/interactives/Button";
import { colors } from "../colors";
export const Button = ({
  label,
  fill,
  pressedColor,
  backgroundColor,
  render,
  onMouseDown,
  onMouseUp,
  ...rest
}) => {
  const [mouseDown, setMouseDown] = useState(false);
  return (
    <SilverButton
      {...rest}
      border={`2px solid ${colors.blue}`}
      outline="none"
      backgroundColor={mouseDown ? "transparent" : backgroundColor}
      color={mouseDown ? backgroundColor : pressedColor}
      mouseDown={mouseDown}
      onPointerDown={() => setMouseDown(state => true)}
      onPointerUp={() => setMouseDown(state => false)}
      onMouseDown={() => setMouseDown(state => true) && onMouseDown()}
      onMouseUp={() => setMouseDown(state => false) && onMouseUp()}
    >
      {render(mouseDown)}
    </SilverButton>
  );
};
