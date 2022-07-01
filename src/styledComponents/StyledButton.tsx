import styled from 'styled-components/macro';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  border: none;
  width: 100px;
  height: 100px;
`;

const StyledIcon = styled.span`
  position: relative;
  width: 60px;
  height: 60px;
  background-color: var(--secondary);
`;

const StyledIconLine = styled.span`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 15px;
  left: 15px;
  background-color: var(--background);
`;

export { StyledButton, StyledIcon, StyledIconLine };
