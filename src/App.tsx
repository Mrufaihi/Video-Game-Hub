import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import GameGrid from './Components/GameGrid';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav''main' `, //mobile is our base
        lg: `'nav nav' 'aside main' `, //large devices 1024px +
      }}
    >
      {/* TODO: change icon Bg + borders */}

      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Show only when Above Large */}
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
