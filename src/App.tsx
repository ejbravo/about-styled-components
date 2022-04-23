import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';

import { lightTheme, darkTheme } from './themes';
import { CustomTheme } from './themes/types';

import { Button, Header, Heading } from './components';
import { routes } from './types';
import { Home, Counter } from './pages';

function App() {
  // const { theme: contextTheme } = useContext(ThemeContext);
  const [themeState, setThemeState] = useState<CustomTheme>(lightTheme);

  const setTheme = () => {
    setThemeState((state) => (state.id === 'light' ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={{ ...themeState, setTheme }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.COUNTER} element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
