import styled, { useTheme } from 'styled-components';

import { RouteNames } from '../types';
import { StyledLink } from './StyledLink';
import { Toggle } from './Toggle';

interface Props {
  open: boolean;
}

const MenuWrapper = styled.nav<Props>`
  padding: 0.75rem;
  background: var(--tertiary);
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 0.15rem 0.5rem;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const getPathName = (path: string): string => {
  if (path === RouteNames.HOME) return 'home';
  return path.replace(/\//g, '').replace(/-/g, ' ');
};

const Menu = ({ open }: Props) => {
  const { id, setTheme } = useTheme();

  return (
    <MenuWrapper open={open}>
      {Object.values(RouteNames).map((path, index) => (
        <StyledLink key={index} to={path}>
          {getPathName(path)}
        </StyledLink>
      ))}
      <Toggle isActive={id === 'dark'} onToggle={setTheme} />
    </MenuWrapper>
  );
};

export { Menu };

// const { id, setTheme } = useContext(ThemeContext);
