import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {border-color: var(--primary) }
  50% {border-color: var(--background)}
  100% {border-color: var(--primary)}
`;

const AnimatedParagraph = styled.p`
  display: inline-block;
  padding: 1rem;
  margin: 1rem 0;
  color: var(--primary);
  border: 3px solid var(--primary);
  font-weight: bold;
  border-radius: 0.25rem;
  animation: ${animation} 3s linear infinite;
`;

export { AnimatedParagraph };

