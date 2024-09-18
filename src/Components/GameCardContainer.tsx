//This component only for containing styles for Game Cards
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    //make this box have all styles + children inside
    <Box width={'300px'} margin={'10px'} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
