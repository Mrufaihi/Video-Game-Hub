import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../src/hooks/useGames';
import GameCards from '../../src/components/GameCard';
import GameCardSkeletons from '../../src/components/GameCardSkeletons';
import GameCardContainer from '../../src/components/GameCardContainer';
import { GameQuery } from '../../src/App';

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  //use it like any other hook
  const { data, error, isLoading } = useGames(gameQuery); //destructure the hook

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //random numbers, amount of skeletons. TODO: link them with game cards.

  /* Errors*/
  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid spacing={6} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
      {/* Loading Skeletons */}
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeletons />
          </GameCardContainer>
        ))}

      {/* Game Cards */}
      {data?.map((game) => (
        // wrap Game Cards with Containers
        <GameCardContainer key={game.id}>
          <GameCards game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
