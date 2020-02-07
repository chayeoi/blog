import { hexToRgb, pxToRem } from '../utils'

interface Palette {
  primary: {
    contrastText: string;
    light: string;
    main: string;
    dark: string;
  };
  secondary: {
    contrastText: string;
    light: string;
    main: string;
    dark: string;
  };
  grey: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
  };
  hexToRgb: (hex: string, alpha?: number) => string;
}

interface Typography {
  pxToRem: (px: number) => string;
}

export interface Theme {
  palette: Palette;
  typography: Typography;
}

const theme: Theme = {
  palette: {
    primary: {
      contrastText: '#ffffff',
      light: '#536dfe',
      main: '#3d5afe',
      dark: '#304ffe',
    },
    secondary: {
      contrastText: '#ffffff',
      light: '#ffd740',
      main: '#ffc400',
      dark: '#ffab00',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    hexToRgb,
  },
  typography: {
    pxToRem,
  },
}

export default theme
