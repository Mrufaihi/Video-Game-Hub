import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Spacer,
} from '@chakra-ui/react';
import { Games } from '../hooks/useGames';
import PlatformIcons from './PlatformIcons';
import GameScore from './GameScore';
import getCroppedImage from '../services/crop-image';

interface Props {
  game: Games;
}

const GameCards = ({ game }: Props) => {
  let croppedImage;
  try {
    croppedImage = getCroppedImage(game.background_image);
  } catch (error) {
    console.error(error);
    croppedImage = 'path/to/default/image.jpg'; // Fallback image path
  }

  return (
    <Card>
      <Image src={croppedImage} />
      <CardBody>
        <HStack>
          <PlatformIcons game={game} />
          <Spacer />
          <GameScore score={game.metacritic} />
        </HStack>

        <Heading marginY={'5px'} size={'xl'}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
