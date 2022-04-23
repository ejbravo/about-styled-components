import styled from 'styled-components';

interface Props {
  bold?: boolean;
  center?: boolean;
  italic?: boolean;
}

const Paragraph = styled.p<Props>`
  text-transform: capitalize;
  font-weight: ${(props) => (props.bold ? '800' : 'normal')};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
`;

export { Paragraph };
