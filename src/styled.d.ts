import 'styled-components';
import { CustomTheme } from './themes/types';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    setTheme: () => void;
  } // extends the global DefaultTheme with our CustomTheme.
}
