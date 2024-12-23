import { Button, HStack, Image } from '@chakra-ui/react';
import logo from '../assets/gamepad-icon 4.webp'; //import img src like module
import ColorModeSwitch from '../Components/ColorModeSwitch';
import SearchInput from '../Components/SearchInput';
import Login from './Login';
import { Link } from 'react-router-dom';
//random comment
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
      {/* router link to login page */}
      <Link to={'/login'}>
        <Button>Login</Button>
      </Link>
    </HStack>
  );
};

export default NavBar;
