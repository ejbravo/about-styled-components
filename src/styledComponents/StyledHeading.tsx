import styled from 'styled-components';
import { getTextAlign, TextAlign } from './utils/commonStyles';

interface Props {
  textAlign?: TextAlign;
}

const StyledHeading = styled.h1<Props>`
  // heading CSS styles
  ${({ textAlign }) => getTextAlign(textAlign)}
`;

export default StyledHeading;
