export type ThemeType = 'light' | 'dark';

export interface CustomTheme {
  id: ThemeType;
  palette: {
    primary: string;
    secondary: string;
    warning: string;
    danger: string;
  };
  background: string;
  textColor: string;
}
