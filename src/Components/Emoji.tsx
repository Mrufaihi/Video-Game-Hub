import skull from '../assets/Skull emoji.webp';
import fire from '../assets/Fire emoji.webp';
import goat from '../assets/Goat on Apple iOS.webp';
import yawn from '../assets/Yawning Face iOS 17.4.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 0) return null;

  //   index signeture, emojiMap got keys : that take images
  const emojiMap: { [key: number]: ImageProps } = {
    0: { src: skull, alt: 'garbage', boxSize: '25px' },
    1: { src: skull, alt: 'garbage', boxSize: '25px' },
    2: { src: skull, alt: 'garbage', boxSize: '25px' },
    3: { src: yawn, alt: 'mid', boxSize: '25px' },
    4: { src: fire, alt: 'good', boxSize: '25px' },
    5: { src: goat, alt: 'masterpiece', boxSize: '35px' },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
