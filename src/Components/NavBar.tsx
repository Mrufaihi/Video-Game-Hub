import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/gamepad-icon 4.webp'; //import img src like module
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

//Navbar
const NavBar = () => {
  return (
    /* HStack = (Horizental) */
    <HStack>
      <Image marginX={'10px'} boxSize={'50px'} src={logo} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
