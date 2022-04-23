import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;

    --background: ${(props) => props.theme.background};
    --text: ${(props) => props.theme.textColor};
    --link: ${(props) => props.theme.linkColor};

    // colors
    --primary: ${(props) => props.theme.palette.primary};
    --secondary: ${(props) => props.theme.palette.secondary};
    --tertiary: ${(props) => props.theme.palette.tertiary};
    --warning: ${(props) => props.theme.palette.warning};
    --danger: ${(props) => props.theme.palette.danger};

    // sizes
  }
`;

export default GlobalStyle;
