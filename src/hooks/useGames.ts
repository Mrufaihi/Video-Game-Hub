import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Games {
  id: number;
  name: string;
}

interface GameResponse {
  // properties from rawg.io
  count: number;
  results: Games[];
}

const useGames = () => {
  // store game fetched
  const [games, setGames] = useState<Games[]>([]);
  // display error
  const [error, setError] = useState('');

  //fetch games
  useEffect(() => {
    // controller & signal
    const controller = new AbortController();

    apiClient
      .get<GameResponse>('/games', { signal: controller.signal }) // 2nd args pass the signal
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        else setError(err.message);
      });

    //cleanup Fun (unmounting)
    return () => controller.abort();
  }, []); //[]

  return { games, error }; //to use them externally
};
export default useGames;
