import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';

/**
 * @export
 * @component
 * @name App
 *
 *
 * @description
 * App
 */

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
