import React from 'react';
import { Button, Paragraph } from '../components';
import { PageLayout, Section } from '../layouts';
import { VariantType } from '../types';

interface Props {}

const Examples = ({}: Props) => {
  return (
    <PageLayout title="Examples">
      <Section title="Dynamic properties">
        <Paragraph>
          Styled components allow us to use a component's props to dynamically
          set style values. For example:
        </Paragraph>
        <Button className="button-basic">Basic button</Button>
        <Button className="button-secondary" variant="secondary">
          Second button
        </Button>
        <Button className="button-warning" variant="warning">
          Warn button
        </Button>
        <Button className="button-danger" variant="danger">
          Danger button
        </Button>
      </Section>
    </PageLayout>
  );
};

export { Examples };
