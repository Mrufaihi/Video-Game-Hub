import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import { Genres } from './hooks/useGenres';
import { useState } from 'react';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `'nav''main' `, //mobile is our base
        lg: `'nav nav' 'aside main' `, //large devices 1024px +
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr', //genre Y is 200px , Gamesgrid Y is 1 fr
      }}
    >
      {/* TODO: change icon Bg + borders */}

      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Show only when Above Large */}
      <Show above="lg">
        <GridItem margin={'10px'} area="aside">
          {/* display genre as list */}
          <GenresList
            selectedGenre={selectedGenre}
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
