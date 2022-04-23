import React, { useContext, useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';

import { lightTheme, darkTheme } from './themes';
import { CustomTheme } from './themes/types';

import { Button, Header, Heading } from './components';
import { Home } from './pages/Home';

function App() {
  // const { theme: contextTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useState<CustomTheme>(lightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          return setTheme((state) =>
            state.id === 'light' ? darkTheme : lightTheme
          );
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
