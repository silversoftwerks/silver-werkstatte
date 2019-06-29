import React from "react";
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
const App = () => (
  <Page>
    <Billboard height={"60%"}>
      <Header>Silver Werkstatte</Header>
      <Header>State of the Art</Header>
      <Header>Design and Engineering Co-working/Co-living</Header>
      <Header>Breckenridge Colorado</Header>
    </Billboard>
    <Box
      height={"10%"}
      justifyContent="center"
      alignItems="center"
      backgroundColor="gold"
    >
      <TextInput />
      <Button>Search</Button>
    </Box>
    {JSON.stringify(store, null, 2)}
    <Grid columns={2}>
      <Column>
        <Box justifyContent="center" alignItems="center">
          <Text>Hello World</Text>
        </Box>
      </Column>
      <Column>
        <Box justifyContent="center" alignItems="center">
          <Text>GoodBye World</Text>
        </Box>
      </Column>
    </Grid>
  </Page>
);

ReactDOM.render(<App />, document.getElementById("react-root"));
