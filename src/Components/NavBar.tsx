import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/game logo 1.webp'; //import img src like module
import ColorModeSwitch from './ColorModeSwitch';

//Navbar
const NavBar = () => {
  return (
    /* HStack = (Horizental) */
    <HStack justifyContent="space-between">
      <Image boxSize={'60px'} src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
