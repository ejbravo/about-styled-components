import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { routes } from '../types';
import { StyledLink } from './StyledLink';
import { Toggle } from './Toggle';

interface Props {
  open: boolean;
}

const MenuWrapper = styled.nav<Props>`
  padding: 0.75rem;
  background: var(--tertiary);
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 0.15rem 0.5rem;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const Menu = ({ open }: Props) => {
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <MenuWrapper open={open}>
      {Object.entries(routes).map(([name, path], index) => (
        <StyledLink key={index} to={path}>
          {name}
        </StyledLink>
      ))}
      <Toggle isActive={id === 'dark'} onToggle={setTheme} />
    </MenuWrapper>
  );
};

export { Menu };
