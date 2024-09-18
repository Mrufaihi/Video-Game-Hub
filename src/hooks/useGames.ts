import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import LoadingSkeleton from '../components/LoadingSkeletons';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string; //url
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
  //Loading state
  const [isLoading, setIsLoading] = useState(false); //init false

  //fetch games
  useEffect(() => {
    //when request games , start loading..
    setIsLoading(true);
    // controller & signal
    const controller = new AbortController();

    apiClient
      .get<GameResponse>('/games', { signal: controller.signal }) // send request for games
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false); // when we receive games , stop loading TODO: use 'finally' later.
      })
      .catch((err) => {
        // Dont return Cancel always
        if (err instanceof CanceledError) return;
        else setError(err.message);
        setIsLoading(false); //if we catch error, stop loading
      });

    //cleanup Fun (unmounting)
    return () => controller.abort();
  }, []); //[]

  return { games, error, isLoading }; //to use them externally
};
export default useGames;
