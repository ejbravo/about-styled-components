import styled from 'styled-components';

import { HeaderWrapper } from './Header';

type AlignType = 'left' | 'center' | 'right';

interface Props {
  textAlign?: AlignType;
}

const Heading = styled.h1<Props>`
  text-align: ${(props) => props.textAlign ?? 'left'};

  ${HeaderWrapper} & {
    color: var(--background);
  }
`;

export { Heading };
