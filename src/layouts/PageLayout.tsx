import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Header, Heading, Menu } from '../components';
import { MenuContext } from '../context';
import { Content } from './Content';

interface Props {
  title: string;
  children: ReactNode;
  center?: boolean;
}

const Wrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.background};
  min-height: 100vh;
`;

const PageLayout = ({ title, children, center }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      <Wrapper>
        <Header />
        <Menu open={open} />
        <Content center={center}>
          <Heading textAlign="center" as={'h2'}>
            {title}
          </Heading>
          {children}
        </Content>
      </Wrapper>
    </MenuContext.Provider>
  );
};

export { PageLayout };
