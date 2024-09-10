import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode(); //this a chakara hook (return obj)
  return (
    <HStack padding={'10px'}>
      {/* if mode is dark then check */}
      <Switch
        isChecked={colorMode === 'dark'}
        // when change occurs, toggle mode
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
