import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

//Games
//Action Games
//Xbox Games
//Xbox Action Games

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} 
  ${gameQuery.genre?.name || ''}
   Games`;

  return (
    <Heading fontSize={50} margin={5} as={'h1'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
