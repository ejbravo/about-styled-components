import styled, { css } from 'styled-components';

interface Props {
  boring?: boolean;
}

const StyledComponent = styled.div<Props>`
  ${(props) =>
    !props.boring &&
    css`
      display: inline-block;
      padding: 1rem;
      margin: 1rem 0;
      color: var(--primary);
      border: 1px solid var(--primary);
      font-weight: bold;
    `}
`;

export { StyledComponent };
