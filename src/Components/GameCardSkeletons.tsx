import { Skeleton, CardBody, Card, SkeletonText } from '@chakra-ui/react';

const GameCardSkeletons = () => {
  return (
    // match the gamegrid card width/height TODO: make it into constants
    <Card>
      <Skeleton height={'200px'} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeletons;
