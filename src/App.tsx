import { Button, Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav''main' `, //mobile is our base
        lg: `'nav nav' 'aside main' `, //large devices 1024px +
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>

      {/* Show only when Above Large */}
      <Show above="lg">
        <GridItem area="aside" bg="green">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="gold">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
