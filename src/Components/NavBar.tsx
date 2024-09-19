import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/gamepad-icon 4.webp'; //import img src like module
import ColorModeSwitch from './ColorModeSwitch';

//Navbar
const NavBar = () => {
  return (
    /* HStack = (Horizental) */
    <HStack justifyContent="space-between">
      <Image marginX={'10px'} boxSize={'50px'} src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
