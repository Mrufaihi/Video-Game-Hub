import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaLinux,
  FaAndroid,
  FaApple,
} from 'react-icons/fa'; //font awesome icons
import { SiNintendo } from 'react-icons/si';
import { IconType } from 'react-icons';
import { Games } from '../hooks/useGames';
import { Icon } from '@chakra-ui/react';

interface Props {
  game: Games;
}

//Mapping Object : index signature (instead of naming every value),  [key->('pc')] :  IconType (FaWindows)
const iconMap: { [key: string]: IconType } = {
  //slug: playstation , name: PlayStation.
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  pc: FaWindows,
  linux: FaLinux,
  mac: FaApple,
  ios: FaApple,
  android: FaAndroid,
};

const PlatformIcons = ({ game }: Props) => {
  if (!PlatformIcons) return null;
  return (
    <>
      {game.parent_platforms.map((platform) => (
        <Icon
          key={platform.platform.id}
          color={'gray.500'}
          as={iconMap[platform.platform.slug]}
        /> //use iconMap mapping, link it with platform slug.
      ))}
    </>
  );
};

export default PlatformIcons;
