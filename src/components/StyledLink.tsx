import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  text-transform: lowercase;
  text-decoration: none;
  color: var(--link);
`;

export { StyledLink };
