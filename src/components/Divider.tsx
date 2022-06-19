import styled from 'styled-components';

const Divider = styled.hr`
  margin: 2rem 0;
  border: 1px solid white;
  background-color: ${(props) => props.theme.palette.secondary};
`;

export { Divider };
