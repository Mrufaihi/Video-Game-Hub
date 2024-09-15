import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Games } from '../hooks/useGames';
interface Props {
  game: Games;
}
const GameCards = ({ game }: Props) => {
  return (
    <Card margin={'10px'}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading size={'xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
