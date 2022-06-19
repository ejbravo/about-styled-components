import { Component } from '../components';
import { PageLayout } from '../layouts';
import { StyledComponent } from '../styledComponents';

const Test = () => {
  return (
    <PageLayout title="Styled components" center>
      <Component>I am a boring React component</Component>
      <StyledComponent>I am a pretty Styled component</StyledComponent>
      <StyledComponent boring>I am a boring Styled component</StyledComponent>
    </PageLayout>
  );
};

export { Test };
