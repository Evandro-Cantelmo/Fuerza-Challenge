import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
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
      <Routes />
    </ThemeProvider>
  );
}

export default App;
