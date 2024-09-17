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

interface Props {
  game: Games;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card margin={'10px'}>
      <Image src={game.background_image} />
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
