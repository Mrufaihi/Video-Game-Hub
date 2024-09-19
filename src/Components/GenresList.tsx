import useGenres from '../hooks/useGeneres';

const GenresList = () => {
  const { genres } = useGenres(); // we get genres info

  //display them as lists
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
