import styled from 'styled-components';

type ListType = 'disc' | 'circle' | 'square';

interface Props {
  type?: ListType;
}

const List = styled.ul<Props>`
  list-style-type: ${(props) => props.type ?? 'disc'};
  padding: 0 18px;
`;

export { List };
