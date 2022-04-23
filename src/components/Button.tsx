import styled from 'styled-components';

const Button = styled.button`
  padding: 1rem;
  background-color: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
`;

export { Button };

// https://dev.to/rajuashok/create-styled-d-ts-to-make-typescript-work-with-styled-components-5dk4
