import { Button, HStack, Image } from '@chakra-ui/react';
import logo from '../assets/gamepad-icon 4.webp'; //import img src like module
import ColorModeSwitch from '../Components/ColorModeSwitch';
import SearchInput from '../Components/SearchInput';
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
      <Link to={'/'}>
        <Image marginX={'10px'} boxSize={'50px'} src={logo} />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
      {/* router link to login page */}
      <Link to={'/steamgames'}>
        <Button>Favorites</Button>
      </Link>
      <Link to={'/login'}>
        <Button className="mr-1">Login</Button>
      </Link>
    </HStack>
  );
};

export default NavBar;
