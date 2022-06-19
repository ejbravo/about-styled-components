import React, { useContext } from 'react';

import { Divider, List, Paragraph } from '../components';
import { PageLayout, Section } from '../layouts';

const Home = () => {
  return (
    <PageLayout title="Introduction">
      <Section title="Official definition">
        <Paragraph>
          Utilizing tagged <i>template literals</i> (a recent addition to
          JavaScript) and the power of <i>CSS</i>, <b>styled-components</b>{' '}
          allows you to write actual CSS code to style your components. It also
          removes the mapping between components and styles – using components
          as a low-level styling construct could not be easier!
        </Paragraph>
      </Section>

      <Divider />

      <Section title="What are styled components?">
        <Paragraph>
          The <b>styled-components</b> is a wonderful tool that came up as an
          alternative for styling the React components using CSS and the
          advantages offered by ES6.
        </Paragraph>
        <List>
          <li>
            With styled-components we can create a React components at the same
            time we are defining their styles.
          </li>
          <li>
            Also, we can add it properties, which makes it useful and dynamic.
          </li>
        </List>
      </Section>

      <Divider />
    </PageLayout>
  );
};

export { Home };
