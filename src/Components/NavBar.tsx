import { HStack, Image } from '@chakra-ui/react';
import logo from '../../src/assets/gamepad-icon 4.webp'; //import img src like module
import ColorModeSwitch from '../../src/components/ColorModeSwitch';
import SearchInput from '../../src/components/SearchInput';

interface Props {
  onSearch: (searchValue: string) => void;
}

//Navbar
const NavBar = ({ onSearch }: Props) => {
  return (
    /* HStack = (Horizental) */
    <HStack>
      <Image marginX={'10px'} boxSize={'50px'} src={logo} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
