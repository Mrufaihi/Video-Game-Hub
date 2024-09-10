import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav''main' `, //mobile is our base
        lg: `'nav nav' 'aside main' `, //large devices 1024px +
      }}
    >
      {/* TODO: change icon Bg + borders */}
      <GridItem boxSize={'60px'} area="nav">
        <NavBar />
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
