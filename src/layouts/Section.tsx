import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Heading } from '../components';

interface Props {
  title: string;
  children: ReactNode;
}

const SectionWrapper = styled.section``;

const Section = ({ title, children }: Props) => {
  return (
    <SectionWrapper>
      <Heading as="h3">{title}</Heading>
      {children}
    </SectionWrapper>
  );
};

export {Section}
