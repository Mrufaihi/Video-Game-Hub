import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark', //access prop of theme config
};

const theme = extendTheme({ config });

export default theme;
