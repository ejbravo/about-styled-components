import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { Heading } from './Heading';
import { Toggle } from './Toggle';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.palette.primary};
`;

const Header = () => {
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Heading>Hello Styled components!</Heading>
      <Toggle isActive={id === 'dark'} onToggle={setTheme} />
    </HeaderWrapper>
  );
};

export { Header };
