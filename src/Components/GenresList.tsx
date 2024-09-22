import useGenres from '../hooks/useGeneres';

const GenresList = () => {
  const { data } = useGenres(); // we get genres info

  //display them as lists
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
