import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCards';

const GameGrid = () => {
  //use it like any other hook
  const { games, error } = useGames(); //destructure the hook

  return (
    <>
      {/* display error if found */}
      {error && <Text>{error}</Text>}
      {/* map the games */}

      <SimpleGrid spacing={'20px'} columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}>
        {games?.map((game) => (
          <GameCards game={game} /> //passed the game it self, not the eniter games
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
