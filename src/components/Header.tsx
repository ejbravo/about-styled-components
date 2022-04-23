import React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.background};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Heading>Hello Styled components!</Heading>
    </HeaderWrapper>
  );
};

export { Header };
