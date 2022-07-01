import React, { useContext } from 'react';
import styled from 'styled-components';

import { MenuContext } from '../context';
import { HeaderWrapper } from './HeaderWrapper';

import { Heading } from './Heading';
import { MenuIcon } from './MenuIcon';

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

export { Header, HeaderWrapper };
