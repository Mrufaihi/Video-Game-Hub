import useData from './useData';
import { Genres } from './useGenres';

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

const useGames = (
  selectedGenre: Genres | null,
  selectedPlatform: Platform | null
) =>
  useData<Games>(
    '/games',
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    //deps
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
