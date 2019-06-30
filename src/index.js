import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";
import Grid from "@SS/design-system/src/components/layout/Grid.jsx";
import Column from "@SS/design-system/src/components/layout/Column.jsx";
import Box from "@SS/design-system/src/components/layout/Box";
import Text from "@SS/design-system/src/components/typography/Text.jsx";
import Page from "@SS/design-system/src/components/layout/Page";
import { Billboard } from "@SS/design-system/src/components/content/Billboard";
import { Header } from "@SS/design-system/src/components/typography/Header";
import { TextInput } from "@SS/design-system/src/components/form/fillables/TextInput";
import { Button } from "@SS/design-system/src/components/interactives/Button";
import { store } from "./models/store";
import Logo from "./../../website/src/components/Logo";
const calendarSelector = store => store;
import BillboardText from "./../../../design-system/src/components/typography/Billboard";
import fontStyles from "./../../../design-system/src/components/typography/fontStyles";
const colors = {
  blue: "#0F4D73",
  lightBlue: "#1B758D",
  yellow: "#FCE4BE",
  orange: "#F3B18C",
  pink: "#DB888A"
};
const App = () => {
  // const { calendar } = useMemo(calendarSelector(store), [
  //   calendarSelector(store)
  // ]);
  const defaultDateIndex = 0;
  const defaultState = {
    ...store,
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
  const [state, setState] = useState(defaultState);
  const {
    debug = true,
    dates,
    holidays,
    buildings,
    rooms,
    bookings,
    users,
    pendingBooking,
    navigation: { dateIndex },
    control: { selectStartDate },
    authentication: { currentUser }
  } = state;
  const [mouseDown, setMouseDown] = useState(false);

  return (
    <Page>
      {/* <Box>
      {debug && JSON.stringify(store, null, 2)}
      </Box> */}
      <Box>
        <Billboard
          padding="96px"
          backgroundImage='url("https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'
        >
          <Box height="45%" fillHorizontal={false} flexDirection="column">
            <Box
              width="unset"
              justifyContent="space-between"
              alignItems="center"
            >
              {"SILVER".split("").map(char => (
                <BillboardText>{char}</BillboardText>
              ))}
            </Box>
            <Logo color="white" accentColor={colors.blue} />

            <BillboardText color="white">WERKSTATTE</BillboardText>
          </Box>
          {/* <Text color="white">
          Design and Engineering Co-working/Co-living
        </Text>
        <Text color="white">Breckenridge Colorado</Text> */}
        </Billboard>
      </Box>
      <Box flexDirection="column" padding="16px">
        <Grid columns={3} gridGap="16px">
          <Column gridColumnStart="1" gridColumnEnd="3">
            <Box
              paddingVertical="16px"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                paddingRight="16px"
                justifyContent="center"
                alignItems="center"
              >
                <TextInput
                  width="100%"
                  color={colors.blue}
                  border={`2px solid ${colors.pink}`}
                  outline="none"
                  paddingRight="16px"
                />
              </Box>
              <Button
                backgroundColor={mouseDown ? "white" : colors.pink}
                border={`2px solid ${colors.pink}`}
                outline="none"
                color={mouseDown ? colors.pink : "white"}
                onMouseDown={() => setMouseDown(state => true)}
                onMouseUp={() => setMouseDown(state => false)}
              >
                <Text>Search</Text>
              </Button>
            </Box>
            <Box paddingTop="16px" justifyContent="center" alignItems="center">
              <Header>Book your next adventure</Header>
            </Box>
            <Box paddingVertical="16px">
              <Grid columns={7} gridGap="16px">
                {dates
                  .slice(dateIndex, dateIndex + 14)
                  .map(({ label, id, ...rest }) => (
                    <Column>
                      <Box
                        backgroundColor={
                          [
                            pendingBooking.startDate,
                            pendingBooking.endDate
                          ].includes(id)
                            ? colors.blue
                            : "white"
                        }
                        border={`1px solid ${colors.blue}`}
                        borderBottom={
                          pendingBooking.startDate < id &&
                          id <= pendingBooking.endDate
                            ? `16px solid ${colors.blue}`
                            : `1px solid ${colors.blue}`
                        }
                        justifyContent="center"
                        alignItems="center"
                        height="100px"
                        textAlign="center"
                        overflow="hidden"
                        paddingHorizontal="8px"
                        onClick={() =>
                          setState(state => ({
                            ...state,
                            control: {
                              ...state.control,
                              selectStartDate: !selectStartDate
                            },
                            pendingBooking: {
                              ...state.pendingBooking,
                              baseCost: !selectStartDate
                                ? rooms[state.pendingBooking.room].rate.base *
                                  (!selectStartDate &&
                                    (state.pendingBooking.enddate != id
                                      ? Math.max(
                                          id,
                                          state.pendingBooking.startDate
                                        ) == state.pendingBooking.startDate
                                        ? state.pendingBooking.startDate + 1
                                        : Math.max(
                                            id,
                                            state.pendingBooking.startDate
                                          )
                                      : state.pendingBooking.endDate) -
                                      (selectStartDate &&
                                      state.pendingBooking.startDate != id
                                        ? id
                                        : state.pendingBooking.startDate))
                                : state.pendingBooking.baseCost,
                              startDate:
                                selectStartDate &&
                                state.pendingBooking.startDate != id
                                  ? id
                                  : state.pendingBooking.startDate,
                              endDate:
                                !selectStartDate &&
                                state.pendingBooking.enddate != id
                                  ? Math.max(
                                      id,
                                      state.pendingBooking.startDate
                                    ) == state.pendingBooking.startDate
                                    ? state.pendingBooking.startDate + 1
                                    : Math.max(
                                        id,
                                        state.pendingBooking.startDate
                                      )
                                  : state.pendingBooking.endDate
                            }
                          }))
                        }
                      >
                        <Text
                          color={
                            ![
                              pendingBooking.startDate,
                              pendingBooking.endDate
                            ].includes(id)
                              ? colors.blue
                              : "white"
                          }
                        >
                          {label}
                        </Text>
                      </Box>
                    </Column>
                  ))}
              </Grid>
            </Box>
            <Box paddingVertical="16px">
              {buildings.map(building => (
                <Box flexDirection="column">
                  <Header color={colors.blue}>{building.name}</Header>
                  <Box flexDirection="column">
                    <Grid columns={1} gridGap="16px" width="100%">
                      {rooms
                        .filter(room => building.rooms.includes(room.id))
                        .map(room => (
                          <Box
                            padding="32px"
                            border={`1px solid ${colors.blue}`}
                            alignItems="center"
                            justifyContent="space-between"
                            backgroundColor={
                              pendingBooking.room == room.id
                                ? colors.blue
                                : "white"
                            }
                            onClick={() =>
                              setState(state => ({
                                ...state,
                                pendingBooking: {
                                  ...state.pendingBooking,
                                  baseCost:
                                    room.id != state.pendingBooking.room
                                      ? rooms[room.id].rate.base *
                                        (pendingBooking.endDate -
                                          pendingBooking.startDate)
                                      : state.pendingBooking.baseCost,
                                  room: room.id
                                }
                              }))
                            }
                          >
                            <Box>
                              <Text
                                color={
                                  pendingBooking.room == room.id
                                    ? "white"
                                    : colors.blue
                                }
                              >
                                {room.name}
                              </Text>
                            </Box>
                            <Box alignItems="center" justifyContent="flex-end">
                              <Text
                                color={
                                  pendingBooking.room == room.id
                                    ? "white"
                                    : colors.blue
                                }
                              >
                                Cost $
                                {rooms[room.id].rate.base *
                                  (pendingBooking.endDate -
                                    pendingBooking.startDate)}
                              </Text>
                            </Box>
                          </Box>
                        ))}
                    </Grid>
                  </Box>
                </Box>
              ))}
            </Box>
          </Column>
          <Column gridColumnStart="3" gridColumnEnd="3" paddingTop="16px">
            <Box
              padding="32px"
              border={`1px solid ${colors.blue}`}
              alignItems="flex-end"
              flexDirection="column"
            >
              {" "}
              <Box padding="16px" flexDirection="column" flexDirection="column">
                <Box justifyContent="space-between">
                  <Text color={colors.blue} {...fontStyles.sizes.xl}>
                    Cost
                  </Text>

                  <Text color={colors.blue} {...fontStyles.sizes.xl}>
                    {pendingBooking.baseCost}
                  </Text>
                </Box>

                <Box justifyContent="space-between">
                  <Text color={colors.blue} {...fontStyles.sizes.xl}>
                    Taxes
                  </Text>
                  <Text color={colors.blue} {...fontStyles.sizes.xl}>
                    {pendingBooking.baseCost * 0.05}
                  </Text>
                </Box>
                <Box justifyContent="space-between">
                  <Text color={colors.blue} {...fontStyles.sizes.xl}>
                    Fees
                  </Text>
                  <Text color={colors.blue} {...fontStyles.sizes.xl}>
                    {Math.trunc(100 * pendingBooking.baseCost * 0.01) / 100}
                  </Text>
                </Box>
              </Box>
              <Box borderBottom={`5px solid ${colors.blue}`} />
              <Box
                backgroundColor={colors.blue}
                justifyContent="space-between"
                padding="16px"
              >
                <Text color={"white"} {...fontStyles.sizes.xl}>
                  Total
                </Text>
                <Text color={"white"} {...fontStyles.sizes.xl}>
                  $
                  {Math.trunc(100 * pendingBooking.baseCost * 1.05 * 1.01) /
                    100}
                </Text>
              </Box>
            </Box>
          </Column>
        </Grid>{" "}
      </Box>
    </Page>
  );
};

ReactDOM.render(<App />, document.getElementById("react-root"));

const OutlineBox = ({ ...rest }) => (
  <Box
    padding="32px"
    border={`1px solid ${colors.blue}`}
    alignItems="center"
    justifyContent="space-between"
    {...rest}
  />
);
