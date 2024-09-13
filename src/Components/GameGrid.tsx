import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Games {
  id: number;
  name: string;
}
// structure the response, for autocompletion & abstraction
interface GameResponse {
  //these properties from rawg
  count: number;
  results: Games[];
}
const GameGrid = () => {
  // store game fetched
  const [games, setGames] = useState<Games[]>([]);
  // display error
  const [error, setError] = useState('');

  //fetch games
  useEffect(() => {
    apiClient
      .get<GameResponse>('/games') //finish directory from baseURL
      .then((res) => setGames(res.data.results)) // get response results
      .catch((err) => setError(err.message)); // catch errors if needed
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
