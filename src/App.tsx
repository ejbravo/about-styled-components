import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';

import { lightTheme, darkTheme } from './themes';
import { CustomTheme } from './themes/types';

import { Button, Header, Heading } from './components';

function App() {
  const [theme, setTheme] = useState<CustomTheme>(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Button>{'Click me!'}</Button>
    </ThemeProvider>
  );
}

export default App;
