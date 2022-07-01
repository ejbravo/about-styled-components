import { Component } from '../components';
import { PageLayout } from '../layouts';
import { AnimatedParagraph, StyledComponent } from '../styledComponents';
import {
  StyledButton,
  StyledIcon,
  StyledIconLine,
} from '../styledComponents/StyledButton';
import StyledHeading from '../styledComponents/StyledHeading';
import StyledInput from '../styledComponents/StyledInput';
import StyledParagraph from '../styledComponents/StyledParagraph';
import { StyledText, StyledWrapper } from '../styledComponents/StyledWrapper';

const Test = () => {
  return (
    <PageLayout title="Styled components" center>
      <Component>I am a boring React component</Component>
      <StyledComponent>I am a pretty Styled component</StyledComponent>
      <StyledComponent boring>I am a boring Styled component</StyledComponent>

      <AnimatedParagraph>I am an animated Styled component</AnimatedParagraph>

      <StyledHeading textAlign="right">Styled right Heading</StyledHeading>
      <StyledParagraph textAlign="center">
        Styled centered paragraph
      </StyledParagraph>
      <StyledParagraph>Styled paragraph by default</StyledParagraph>

      <StyledInput type="text" placeholder="Styled input" />

      <StyledWrapper className="styled-wrapper">
        <StyledText className="styled-text">I want to be red</StyledText>
      </StyledWrapper>
    </PageLayout>
  );
};

export { Test };

/*

      <StyledButton>
        <StyledIcon>
          <StyledIconLine />
        </StyledIcon>
      </StyledButton>
*/
