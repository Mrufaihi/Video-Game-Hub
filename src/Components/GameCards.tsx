import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Games } from '../hooks/useGames';
import PlatformIcons from './PlatformIcons';

interface Props {
  game: Games;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card margin={'10px'}>
      <Image src={game.background_image} />
      <CardBody>
        {/* we seperated Platform icons cause code is too long, 
        also this page only for displaying Card not managing icons */}

        <PlatformIcons game={game} />

        <Heading marginY={1} size={'xl'}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
