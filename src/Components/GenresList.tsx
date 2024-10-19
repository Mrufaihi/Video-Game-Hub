import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genres } from '../../src/hooks/useGenres';
import getCroppedImage from '../../src/services/crop-image';

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
    <>
      <Heading fontSize={'4xl'} marginTop={5} marginBottom={5}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY={1}>
              <Image
                objectFit={'cover'}
                boxSize="40px"
                borderRadius="8px"
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                marginBottom={4}
                marginRight={5}
                fontSize="xl"
                whiteSpace={'wrap'}
                textAlign={'left'}
                onClick={() => onSelectedGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                variant={'link'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
