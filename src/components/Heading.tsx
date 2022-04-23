import styled from 'styled-components';

type AlignType = 'left' | 'center' | 'right';

interface Props {
  textAlign?: AlignType;
}

const Heading = styled.h1<Props>`
  text-align: ${(props) => props.textAlign ?? 'left'};
`;

export { Heading };
