import styled, { css } from 'styled-components';
import { VariantType } from '../types';

const getButtonStyles = (variant: VariantType = 'primary') => css`
  background-color: ${(props) => props.theme.palette[variant]};
  border: 2px solid ${(props) => props.theme.palette[variant]};
  color: ${(props) => props.theme.background};
`;

interface Props {
  variant?: VariantType;
}

const Button = styled.button<Props>`
  margin: 0.25rem 0.5rem 0.25rem 0;
  padding: 0.75rem;
  border-width: 0.25rem;
  border-radius: 0.25rem;
  font-size: 1.25rem;

  ${(props) => getButtonStyles(props.variant)}

  &:hover, &:focus {
    opacity: 0.75;
  }
`;

export { Button };

// https://dev.to/rajuashok/create-styled-d-ts-to-make-typescript-work-with-styled-components-5dk4
