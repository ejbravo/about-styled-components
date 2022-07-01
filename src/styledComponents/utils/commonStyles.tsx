import { css } from 'styled-components';

export type TextAlign = 'center' | 'right' | 'left';

export const getTextAlign = (textAlign: TextAlign = 'left') => {
  return css`
    text-align: ${textAlign};
  `;
};
