import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {
  ChakraProvider,
  withDefaultColorScheme,
  withDefaultProps,
} from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { floatingLabel, baseColorConfig } from './configs/themeConfig';

const colors = {
  // brand: {
  //   900: '#1a365d',
  //   800: '#153e75',
  //   700: '#2a69ac',
  // },
};

const theme = extendTheme(
  floatingLabel,
  withDefaultColorScheme({ colorScheme: 'green' })
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
