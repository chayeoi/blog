import { css, SerializedStyles } from '@emotion/core'
import _ from 'lodash/fp'

import { hexToRgb, pxToRem } from '../utils'

interface Sizes {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface Media {
  xs?: (strings: string[], size: number, properties: SerializedStyles) => SerializedStyles;
  sm?: (strings: string[], size: number, properties: SerializedStyles) => SerializedStyles;
  md?: (strings: string[], size: number, properties: SerializedStyles) => SerializedStyles;
  lg?: (strings: string[], size: number, properties: SerializedStyles) => SerializedStyles;
  xl?: (strings: string[], size: number, properties: SerializedStyles) => SerializedStyles;
}

interface Breakpoints {
  sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  media: Media;
}

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
  breakpoints: Breakpoints;
  palette: Palette;
  typography: Typography;
}

const theme: Theme = {
  breakpoints: {
    sizes: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1960,
    },
    get media() {
      return _.reduce<string, Media>((acc, label) => ({
        ...acc,
        [label]: (...args: string[]) => css`
          @media (min-width: ${this.sizes[label as keyof Sizes]}px) {
            ${css(...args)}
          }
        `,
      }), {}, _.keys(this.sizes))
    },
  },
  palette: {
    primary: {
      contrastText: '#ffffff',
      light: '#536dfe',
      main: '#3d5afe',
      dark: '#304ffe',
    },
    secondary: {
      contrastText: '#ffffff',
      light: '#ff8a80',
      main: '#ff5252',
      dark: '#ff1744',
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
