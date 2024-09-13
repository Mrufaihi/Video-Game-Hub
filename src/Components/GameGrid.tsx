import { Text } from '@chakra-ui/react';
import useGames from '../hooks/UseGames';

const GameGrid = () => {
  //use it like any other hook
  const { games, error } = useGames(); //destructure the hook

  return (
    <>
      {/* display error if found */}
      {error && <Text>{error}</Text>}
      {/* map the games */}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
