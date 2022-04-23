import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { Heading } from './Heading';
import { Toggle } from './Toggle';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.palette.primary};
  background-color: var(--primary);
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
