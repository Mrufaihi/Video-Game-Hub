import { Grid, GridItem, Show, HStack } from '@chakra-ui/react';
import NavBar from '../src/components/NavBar';
import GameGrid from '../src/components/GameGrid';
import GenresList from '../src/components/GenresList';
import { Genres } from '../src/hooks/useGenres';
import { Platform } from '../src/hooks/usePlatforms';
import { useState } from 'react';
import PlatformSelector from '../src/components/PlatformSelector';
import SortSelector from '../src/components/SortSelector';
import GameHeading from '../src/components/GameHeading';

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sort: string;
  searchValue: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(searchValue) =>
            setGameQuery({ ...gameQuery, searchValue })
          }
        />
      </GridItem>

      {/* Show only when Above Large */}
      <Show above="lg">
        <GridItem margin={'10px'} area="aside">
          {/* display genre as list */}
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5} paddingLeft={2} marginBottom={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />

          <SortSelector
            sortValue={gameQuery.sort}
            onSelectSort={(sort) => setGameQuery({ ...gameQuery, sort })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
