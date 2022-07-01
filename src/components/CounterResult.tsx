import React from 'react';
import styled from 'styled-components';

interface Props {
  count: number;
}

const StyledResult = styled.div<Props>`
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ count }) => (count < 0 ? 'red' : 'black')};
`;

const CounterResult = ({ ...props }: Props) => {
  const { count } = props;

  return <StyledResult {...props}>{count}</StyledResult>;
};

export { CounterResult };
