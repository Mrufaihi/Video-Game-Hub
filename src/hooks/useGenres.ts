import genres from '../../src/data/genres';

export interface Genres {
  id: number;
  name: string; //required
  image_background: string; //genres img
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
