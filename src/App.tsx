import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthContextProvider } from './context/AuthContext';

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
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
