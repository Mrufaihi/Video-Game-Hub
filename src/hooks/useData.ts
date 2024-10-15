//Generic Data Fetching (For Duplicate code)
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface FetchResponse<T> {
  // properties from rawg.io
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestCongif?: AxiosRequestConfig,
  deps?: any[]
) => {
  // store data fetched
  const [data, setData] = useState<T[]>([]);
  // display error
  const [error, setError] = useState('');
  //Loading state
  const [isLoading, setIsLoading] = useState(false); //init false

  //fetch games
  useEffect(
    () => {
      //when request data , start loading..
      setIsLoading(true);
      // controller & signal
      const controller = new AbortController();

      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestCongif,
        }) // send request for data
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false); // when we receive data , stop loading TODO: use 'finally' later.
        })
        .catch((err) => {
          // Dont return Cancel always
          if (err instanceof CanceledError) return;
          else setError(err.message);
          setIsLoading(false); //if we catch error, stop loading
        });

      //cleanup Fun (unmounting)
      return () => controller.abort();
    },
    deps ? [...deps] : [] //if truthy
  ); //[]

  return { data, error, isLoading }; //to use them externally
};
export default useData;
