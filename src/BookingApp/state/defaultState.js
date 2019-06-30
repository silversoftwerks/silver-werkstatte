import { store } from "../../models/store";
// const { calendar } = useMemo(calendarSelector(store), [
//   calendarSelector(store)
// ]);
//   const [ref, { x, y, width }] = useDimensions();
//   console.log(width);
const defaultDateIndex = 0;
export const defaultState = {
  store,
  navigation: {
    dateIndex: defaultDateIndex
  },
  authentication: {
    currentUser: 1
  },
  pendingBooking: {
    startDate: store.dates[defaultDateIndex].id,
    endDate: store.dates[defaultDateIndex + 1].id,
    room: 0,
    baseCost: 0
  },
  control: { selectStartDate: true }
};
