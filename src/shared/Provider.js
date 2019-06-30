import { useState } from "react";
import { useDimensions } from "./../hooks/useDimensions";
export const Provider = ({ defaultState, render }) =>
  render(useState(defaultState), useDimensions());
