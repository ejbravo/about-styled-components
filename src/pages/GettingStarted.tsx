import React from 'react';

import { Divider, Heading, List, Paragraph } from '../components';
import { PageLayout, Section } from '../layouts';

const GettingStarted = () => {
  return (
    <PageLayout title="Getting Started">
      <Section title="Installation">
        <List>
          <li>npx create-react-app styled-components --template typescript</li>
          <li>npm install --save styled-components</li>
          <li>npm install --save @types/styled-components</li>
        </List>
      </Section>

      <Divider />

      <Section title="Visual Studio Code Extension">
        <List>
          <li>CSS detailed information while working with templated strings</li>
          <li>Highlighted syntaxis for components</li>
          <li>Error highlights</li>
        </List>
      </Section>

      <Divider />

      <Section title="Use Styled-components">
        <List>
          <li>import styled from 'styled-components</li>
        </List>
      </Section>
    </PageLayout>
  );
};

export { GettingStarted };
