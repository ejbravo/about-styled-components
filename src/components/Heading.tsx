import React, { ReactNode } from 'react';
import styled from 'styled-components';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface Props extends HeadingProps {
  level?: HeadingLevel;
  children: ReactNode;
}

interface HeadingProps {
  center?: boolean;
}

const HeadingWrapper = styled.h1<HeadingProps>`
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  color: ${(props) => props.theme.textColor};
`;

const Heading = ({ level, children, ...props }: Props) => {
  return (
    <HeadingWrapper as={level} {...props}>
      {children}
    </HeadingWrapper>
  );
};

export { Heading };
