export type ThemeType = 'light' | 'dark';

export interface CustomTheme {
  id: ThemeType;
  palette: {
    primary: string;
    secondary: string;
    tertiary: string;
    warning: string;
    danger: string;
  };
  background: string;
  textColor: string;
  linkColor: string;
}
