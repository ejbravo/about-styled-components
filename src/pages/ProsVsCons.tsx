import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Divider, List, Span } from '../components';
import { PageLayout, Section } from '../layouts';

const ProsVsCons = () => {
  const { id } = useContext(ThemeContext);

  return (
    <PageLayout title="Pros Vs Cons">
      <Section title="Advantages">
        <List>
          <li>No class name bugs</li>
          <li>Reusable components and scoped styles</li>
          <li>Writing pure CSS</li>
          <li>Dynamic CSS easily</li>
          <li>
            Theming support:{' '}
            <Span bold italic>
              {id} theme
            </Span>
          </li>
          <li>Global Styles</li>
          <li>Performance improvements</li>
          <li>Support for server-side rendering</li>
          <li>React Native support as well</li>
          <li>Unit/Snapshot testing tools for our styled components</li>
        </List>
      </Section>

      <Divider />

      <Section title="Disadvantages">
        <List>
          <li>Unusual approach</li>
          <li>Learning curve required</li>
          <li>Workarounds required</li>
          <li>Smaller community</li>
        </List>
      </Section>
    </PageLayout>
  );
};

export { ProsVsCons };
