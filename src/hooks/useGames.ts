import { GameQuery } from '../App';
import useData from './useData';

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

const useGames = (gameQuery: GameQuery) =>
  useData<Games>(
    '/games',
    {
      params: {
        //all params names are in rawg
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sort,
        search: gameQuery.searchValue,
      },
    },
    //deps
    [gameQuery]
  );

export default useGames;
