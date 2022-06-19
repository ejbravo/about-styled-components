import styled from 'styled-components';

interface Props {
  center?: boolean;
}

const Content = styled.article<Props>`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 16px 0;
  box-sizing: border-box;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`;

export { Content };
