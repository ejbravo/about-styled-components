import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const HeadingWrapper = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

const Heading = ({ children }: Props) => {
  return <HeadingWrapper>{children}</HeadingWrapper>;
};

export { Heading };
