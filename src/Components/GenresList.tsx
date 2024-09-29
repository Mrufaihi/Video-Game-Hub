import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImage from '../services/crop-image';

const GenresList = () => {
  const { data } = useGenres(); // we get genres info

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
