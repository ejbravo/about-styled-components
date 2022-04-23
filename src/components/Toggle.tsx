import { useContext } from 'react';
import styled from 'styled-components';

interface ToggleProps extends NotchProps {
  onToggle: () => void;
}

interface NotchProps {
  isActive: boolean;
}

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 20px;
  border-radius: 25px;
  border: 2px solid black;
  margin: auto 0;
  display: flex;
  cursor: pointer;
`;

const Notch = styled.div<NotchProps>`
  height: 18px;
  width: 18px;
  border: 1px solid black;
  margin-top: 0px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${(props) => (props.isActive ? '30px' : '0px')});
`;

const Toggle = ({ isActive, onToggle }: ToggleProps) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
};

export { Toggle };
