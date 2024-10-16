import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCard';
import GameCardSkeletons from './GameCardSkeletons';
import GameCardContainer from './GameCardContainer';
import { Genres } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';

interface Props {
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  //use it like any other hook
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform); //destructure the hook

  const skeletons = [1, 2, 3, 4, 5, 6]; //random numbers, amount of skeletons. TODO: link them with game cards.

  return (
    <>
      {/* Errors*/}
      {error && <Text>{error}</Text>}

      {/* Loading Skeletons */}
      {isLoading && (
        <SimpleGrid spacing={3} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
          {skeletons.map((skeleton) => (
            // wrap Game Cards with Containers
            <GameCardContainer key={skeleton}>
              <GameCardSkeletons />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}

      {/* Game Cards */}
      <SimpleGrid spacing={3} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {data?.map((game) => (
          // wrap Game Cards with Containers
          <GameCardContainer key={game.id}>
            <GameCards game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
