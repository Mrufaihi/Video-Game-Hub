import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/game logo 1.webp'; //import img src like module

//Navbar
const NavBar = () => {
  return (
    /* (Horizental) */
    <HStack>
      <Image src={logo} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
