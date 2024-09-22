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

const useGames = () => useData<Games>('/games');

export default useGames;
