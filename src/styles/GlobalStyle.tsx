import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;

    --background: ${({ theme }) => theme.background};
    --text: ${({ theme }) => theme.textColor};
    --link: ${({ theme }) => theme.linkColor};

    // colors
    --primary: ${({ theme }) => theme.palette.primary};
    --secondary: ${({ theme }) => theme.palette.secondary};
    --tertiary: ${({ theme }) => theme.palette.tertiary};
    --warning: ${({ theme }) => theme.palette.warning};
    --danger: ${({ theme }) => theme.palette.danger};
  }
`;

export default GlobalStyle;
