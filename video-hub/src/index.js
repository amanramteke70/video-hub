import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>
);
