//WE DUPLICATED CODE FROM useGames Hook
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genres {
  id: number;
  name: string; //required
}
interface GenresResponse {
  // properties from rawg.io
  count: number;
  results: Genres[];
}

const useGenres = () => {
  // store game fetched
  const [genres, setGenres] = useState<Genres[]>([]);
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
      .get<GenresResponse>('/genres', { signal: controller.signal }) // send request for games
      .then((res) => {
        setGenres(res.data.results);
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

  return { genres, error, isLoading }; //to use them externally
};
export default useGenres;
