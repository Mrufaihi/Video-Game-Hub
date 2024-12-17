import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Spacer,
} from '@chakra-ui/react';
import { Games } from '../hooks/useGames';
import PlatformIcons from '../Components/PlatformIcons';
import GameScore from '../Components/GameScore';
import getCroppedImage from '../services/crop-image';
import Emoji from '../Components/Emoji';

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
