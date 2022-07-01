import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';

import { lightTheme, darkTheme } from './themes';
import { CustomTheme } from './themes/types';

import { RouteNames } from './types';
import {
  Home,
  CounterPage,
  GettingStarted,
  Videos,
  ProsVsCons,
  Examples,
  Test,
} from './pages';

function App() {
  const [themeState, setThemeState] = useState<CustomTheme>(lightTheme);

  const setTheme = () => {
    setThemeState((state) => (state.id === 'light' ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={{ ...themeState, setTheme }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={RouteNames.HOME} element={<Home />} />
          <Route path={RouteNames.PROSVsCONS} element={<ProsVsCons />} />
          <Route
            path={RouteNames.GETTINGSTARTED}
            element={<GettingStarted />}
          />
          <Route path={RouteNames.EXAMPLES} element={<Examples />} />
          <Route path={RouteNames.COUNTER} element={<CounterPage />} />
          {/* <Route path={RouteNames.VIDEOS} element={<Videos />} /> */}
          <Route path={RouteNames.TEST} element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
