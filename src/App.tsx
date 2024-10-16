import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import GameGrid from './Components/GameGrid';
import GenresList from './Components/GenresList';
import { Genres } from './hooks/useGenres';
import { Platform } from './hooks/usePlatforms';
import { useState } from 'react';
import PlatformSelector from './Components/PlatformSelector';

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
