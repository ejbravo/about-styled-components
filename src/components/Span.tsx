import styled from 'styled-components';

interface Props {
  bold?: boolean;
  italic?: boolean;
}

const Span = styled.span<Props>`
  font-weight: ${(props) => (props.bold ? '800' : 'normal')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
`;

export { Span };
