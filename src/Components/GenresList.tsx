import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genres } from '../hooks/useGenres';
import getCroppedImage from '../services/crop-image';

interface Props {
  onSelectedGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenresList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres(); // we get genres info from Geeric Data Hook

  if (error) return null;
  //when server request for genres, display spinner
  if (isLoading) return <Spinner />;

  //display them as lists
  return (
    // List in chakra
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={1}>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImage(genre.image_background)}
            />
            <Button
              onClick={() => onSelectedGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              fontSize="lg"
              variant={'link'}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
