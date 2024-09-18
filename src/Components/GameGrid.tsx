import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCard';
import LoadingSkeletons from './LoadingSkeletons';

const GameGrid = () => {
  //use it like any other hook
  const { games, error, isLoading } = useGames(); //destructure the hook

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //random numbers, amount of skeletons. TODO: link them with game cards.

  return (
    <>
      {/* Errors*/}
      {error && <Text>{error}</Text>}

      {/* Loading Skeletons */}
      {isLoading && (
        <SimpleGrid spacing={'20px'} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
          {skeletons.map((skeleton) => (
            <LoadingSkeletons />
          ))}
        </SimpleGrid>
      )}

      {/* Game Cards */}
      <SimpleGrid spacing={'20px'} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {games?.map((game) => (
          <GameCards game={game} /> //passed the game it self, not the eniter games
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
