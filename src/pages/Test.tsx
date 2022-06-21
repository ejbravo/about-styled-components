import { Component } from '../components';
import { PageLayout } from '../layouts';
import { AnimatedParagraph, StyledComponent } from '../styledComponents';
import {
  StyledButton,
  StyledIcon,
  StyledIconLine,
} from '../styledComponents/StyledButton';

const Test = () => {
  return (
    <PageLayout title="Styled components" center>
      <Component>I am a boring React component</Component>
      <StyledComponent>I am a pretty Styled component</StyledComponent>
      <StyledComponent boring>I am a boring Styled component</StyledComponent>

      <StyledButton>
        <StyledIcon>
          <StyledIconLine />
        </StyledIcon>
      </StyledButton>

      <AnimatedParagraph>I am an animated Styled component</AnimatedParagraph>
    </PageLayout>
  );
};

export { Test };
