import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}
const GameScore = ({ score }: Props) => {
  const color =
    score >= 90
      ? 'blue'
      : score >= 80
      ? 'green'
      : score >= 60
      ? 'yellow'
      : 'red';

  return (
    <Badge colorScheme={color} fontSize={'20px'} borderRadius={'5px'}>
      {score}
    </Badge>
  );
};

export default GameScore;
