import { Grid, GridItem, Show, HStack } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import GameGrid from './Components/GameGrid';
import GenresList from './Components/GenresList';
import { Genres } from './hooks/useGenres';
import { Platform } from './hooks/usePlatforms';
import { useState } from 'react';
import PlatformSelector from './Components/PlatformSelector';
import SortSelector from './Components/SortSelector';
import GameHeading from './Components/GameHeading';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

//simulate a change in master branch
export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sort: string;
  searchValue: string;
}
// export interface login {
//   user: null;
//   username: null;
// }

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    //wrap all with react router to manage pages
    <Router>
      {/* just the structure of app */}
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
        {/* nav */}
        <GridItem area="nav">
          <NavBar
            onSearch={(searchValue) =>
              setGameQuery({ ...gameQuery, searchValue })
            }
          />
        </GridItem>

        {/* Routes (all routes go through routes like switch) */}
        <Routes>
          {/* Route 1 (landing page) */}
          <Route
            path="/"
            // element specify component to render for this route
            element={
              <>
                <Show above="lg">
                  <GridItem margin={'10px'} area="aside">
                    {/* display genre as list */}
                    <GenresList
                      selectedGenre={gameQuery.genre}
                      onSelectedGenre={(genre) =>
                        setGameQuery({ ...gameQuery, genre })
                      }
                    />
                  </GridItem>
                </Show>
                {/* main */}
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
                      onSelectSort={(sort) =>
                        setGameQuery({ ...gameQuery, sort })
                      }
                    />
                  </HStack>
                  <GameGrid gameQuery={gameQuery} />
                </GridItem>
              </>
            }
          />
          {/* end of element route 1 */}

          {/* route 2 (login)*/}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Grid>
    </Router>
  );
}

export default App;
