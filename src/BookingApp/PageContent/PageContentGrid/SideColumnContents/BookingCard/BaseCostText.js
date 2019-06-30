import React from "react";
import { CostText } from "./CostText";

const multipliers = {
  base: 1,
  tax: 0.05,
  fees: 0.01
};
const { base, tax, fees, total = base + tax + fees } = multipliers;

export const BaseCostText = ({ color, baseCost }) => (
  <CostText label="Base" multiplier={base} color={color} baseCost={baseCost} />
);
export const TaxCostText = ({ color, baseCost }) => (
  <CostText label="Taxes" multiplier={tax} color={color} baseCost={baseCost} />
);
export const FeeCostText = ({ color, baseCost }) => (
  <CostText label="Fees" multiplier={fees} color={color} baseCost={baseCost} />
);
export const TotalCostText = ({ color, baseCost }) => (
  <CostText
    label="Total"
    multiplier={total}
    color={color}
    baseCost={baseCost}
  />
);
