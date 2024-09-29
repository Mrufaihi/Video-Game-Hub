import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImage from '../services/crop-image';

const GenresList = () => {
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
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
