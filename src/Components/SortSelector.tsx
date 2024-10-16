import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectSort: (sort: string) => void;
  sortValue: string | null; //sort from app.tsx
}

const SortSelector = ({ onSelectSort, sortValue }: Props) => {
  const sortArray = [
    //start value with - to get from high to low
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: 'released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Rating' },
  ];

  const currentSort = sortArray.find((sort) => sort.value === sortValue);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By: {currentSort?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortArray.map((sort) => (
          <MenuItem
            onClick={() => onSelectSort(sort.value)}
            key={sort.value}
            value={sort.value}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
