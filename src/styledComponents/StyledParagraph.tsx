import styled from 'styled-components';
import { getTextAlign, TextAlign } from './utils/commonStyles';

interface Props {
  textAlign?: TextAlign;
}

const StyledParagraph = styled.p<Props>`
  // layout CSS styles
  ${({ textAlign }) => getTextAlign(textAlign)}
`;

export default StyledParagraph;
