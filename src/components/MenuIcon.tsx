import styled from 'styled-components';

const MenuIcon = styled.div`
  cursor: pointer;
  width: 25px;
  min-width: 25px;
  padding: 5px;

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
