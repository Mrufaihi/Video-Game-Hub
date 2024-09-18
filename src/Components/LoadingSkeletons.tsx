import { Skeleton, CardBody, Card, SkeletonText } from '@chakra-ui/react';

const LoadingSkeletons = () => {
  return (
    // match the gamegrid card width/height TODO: make it into constants
    <Card height={'400px'} width={'300px'} margin={'10px'} overflow="hidden">
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default LoadingSkeletons;
