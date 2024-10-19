import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Spacer,
} from '@chakra-ui/react';
import { Games } from '../../src/hooks/useGames';
import PlatformIcons from '../../src/components/PlatformIcons';
import GameScore from '../../src/components/GameScore';
import getCroppedImage from '../../src/services/crop-image';
import Emoji from '../../src/components/Emoji';

interface Props {
  game: Games;
}

const GameCards = ({ game }: Props) => {
  // let croppedImage;
  // try {
  let croppedImage = getCroppedImage(game.background_image);
  // } catch (error) {
  //   console.error(error);
  //   croppedImage = 'path/to/default/image.jpg'; // Fallback image path
  // }

  return (
    <Card overflow={'hidden'}>
      <Image src={croppedImage} />
      <CardBody>
        <HStack marginBottom={2}>
          <PlatformIcons game={game} />
          <Spacer />
          <GameScore score={game.metacritic} />
        </HStack>

        <Heading marginY={'5px'} size={'xl'}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
