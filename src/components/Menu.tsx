import styled from 'styled-components';
import { routes } from '../types';
import { StyledLink } from './StyledLink';

const MenuWrapper = styled.nav`
  padding: 0.5rem;
  background: var(--tertiary);
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  border-bottom: 2px solid var(--primary);
`;

const Menu = () => {
  return (
    <MenuWrapper>
      {Object.entries(routes).map(([name, path], index) => (
        <StyledLink key={index} to={path}>
          {name}
        </StyledLink>
      ))}
    </MenuWrapper>
  );
};

export { Menu };
