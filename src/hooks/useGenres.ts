//WE DUPLICATED CODE FROM useGames Hook
import useData from './useData';

export interface Genres {
  id: number;
  name: string; //required
  image_background: string; //genres img
}

const useGenres = () => useData<Genres>('/genres');

export default useGenres;
