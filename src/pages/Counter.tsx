import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Heading, Paragraph } from '../components';
import { PageLayout } from '../layouts';

const Counter = () => {
  const { id } = useContext(ThemeContext);
  return (
    <PageLayout>
      <Heading level="h2" center>
        Counter
      </Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos provident
        cumque possimus illo, velit cupiditate dolorem delectus repellendus quae
        porro dolorum assumenda! Rem magnam facilis quae odit, explicabo alias
        velit.
      </Paragraph>
    </PageLayout>
  );
};

export { Counter };
