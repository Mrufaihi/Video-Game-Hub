import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //parent_platform: is an Array of objects, the has property with obj Platform.
  metacritic: number;
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

    apiClient()
      .get<GameResponse>('/games', { signal: controller.signal }) // 2nd args pass the signal
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        // Dont return Cancel always
        if (err instanceof CanceledError) return;
        else setError(err.message);
      });

    //cleanup Fun (unmounting)
    return () => controller.abort();
  }, []); //[]

  return { games, error }; //to use them externally
};
export default useGames;
