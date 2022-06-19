import styled, { css } from 'styled-components';
import { VariantType } from '../types';

interface Props {
  variant?: VariantType;
}

const getButtonStyles = (variant: VariantType = 'primary') => css`
  background-color: ${(props) => props.theme.palette[variant]};
  border: 2px solid ${(props) => props.theme.palette[variant]};
  color: ${(props) => props.theme.background};
`;

const Button = styled.button<Props>`
  display: inline-block;
  margin: 0.25rem 0.5rem 0.25rem 0;
  padding: 0.75rem;
  border-width: 2px;
  border-radius: 4px;
  font-size: 1.25rem;
  ${(props) => getButtonStyles(props.variant)}
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;

export { Button };

// https://dev.to/rajuashok/create-styled-d-ts-to-make-typescript-work-with-styled-components-5dk4
