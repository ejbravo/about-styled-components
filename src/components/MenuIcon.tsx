import styled from 'styled-components';

const MenuIcon = styled.div`
  width: 2rem;
  padding: 5px 0 10px;

  > div {
    height: 3px;
    background-color: var(--background);
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export { MenuIcon };
