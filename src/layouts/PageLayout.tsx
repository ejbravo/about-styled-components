import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Header, Menu } from '../components';
import { Content } from './Content';

interface Props {
  children: ReactNode;
}

const Wrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.background};
  min-height: 100vh;
`;

const PageLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Menu />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export { PageLayout };
