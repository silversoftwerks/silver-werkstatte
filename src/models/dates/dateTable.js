import { addDays } from "../addDays";
import { dateFactory } from "./dateFactory";
export const now = new Date();

export const dateTable = [...new Array(20).fill(0)].map((zero, index) => ({
  id: index,
  ...dateFactory(addDays(now, index))
}));
