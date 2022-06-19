import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Component = ({ children }: Props) => {
  return <div>{children}</div>;
};

export { Component };
