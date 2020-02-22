export interface Sizes {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface Media {
  [key: string]: string;
}

// export interface Media {
//   xs?: (strings: string[], size: number, properties: SerializedStyles) => SerializedStyles;
//   sm?: (strings: string[], size: number, properties: SerializedStyles) => SerializedStyles;
//   md?: (strings: string[], size: number, properties: SerializedStyles) => SerializedStyles;
//   lg?: (strings: string[], size: number, properties: SerializedStyles) => SerializedStyles;
//   xl?: (strings: string[], size: number, properties: SerializedStyles) => SerializedStyles;
// }

export interface Breakpoints {
  sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  media: Media;
}

export interface Palette {
  type: 'dark' | 'light';
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
  background: {
    paper: string;
    default: string;
  };
  text: {
    default: string;
    primary: string;
    secondary: string;
    tertiary: string;
  };
  hexToRgb: (hex: string, alpha?: number) => string;
}

export interface Typography {
  pxToRem: (px: number) => string;
}

export interface Theme {
  breakpoints: Breakpoints;
  palette: Palette;
  typography: Typography;
}

export interface ThemeMap {
  dark: Theme;
  light: Theme;
}
