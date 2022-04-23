import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../context';

import { Heading } from './Heading';
import { MenuIcon } from './MenuIcon';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary};
  background-color: var(--primary);
  padding-top: 1rem;

  ${Heading} {
    color: var(--background);
  }
`;

const Header = () => {
  const { open, setOpen } = useContext(MenuContext);

  return (
    <HeaderWrapper>
      <Heading>Styled components</Heading>
      <MenuIcon onClick={() => setOpen && setOpen(!open)}>
        <div />
        <div />
        <div />
      </MenuIcon>
    </HeaderWrapper>
  );
};

export { Header };
