import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Heading, Paragraph } from '../components';
import { PageLayout } from '../layouts';

const Home = () => {
  const { id } = useContext(ThemeContext);
  return (
    <PageLayout title="Hi World!">
      <Heading textAlign="center" as={'h3'}>{`${id} theme`}</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos provident
        cumque possimus illo, velit cupiditate dolorem delectus repellendus quae
        porro dolorum assumenda! Rem magnam facilis quae odit, explicabo alias
        velit.
      </p>
      <Paragraph center>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        laudantium sequi quasi aperiam ipsam sint temporibus minima in
        cupiditate fugit? Labore alias odio consequuntur blanditiis qui, sequi
        soluta tenetur corporis!
      </Paragraph>
      <Paragraph italic>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        laudantium sequi quasi aperiam ipsam sint temporibus minima in
        cupiditate fugit? Labore alias odio consequuntur blanditiis qui, sequi
        soluta tenetur corporis!
      </Paragraph>
      <Paragraph bold>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        laudantium sequi quasi aperiam ipsam sint temporibus minima in
        cupiditate fugit? Labore alias odio consequuntur blanditiis qui, sequi
        soluta tenetur corporis!
      </Paragraph>
      <Paragraph bold italic>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        laudantium sequi quasi aperiam ipsam sint temporibus minima in
        cupiditate fugit? Labore alias odio consequuntur blanditiis qui, sequi
        soluta tenetur corporis!
      </Paragraph>
    </PageLayout>
  );
};

export { Home };
