import _ from 'lodash/fp'

import { Sizes, ThemeMap } from '../models/Theme'
import { hexToRgb, pxToRem } from '../utils'

const common = {
  palette: {
    primary: {
      contrastText: '#ffffff',
      light: '#448aff',
      main: '#2979ff',
      dark: '#2962ff',
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
  breakpoints: {
    sizes: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1334,
      xl: 1680,
    },
    get media() {
      return _.reduce((acc, label) => ({
        ...acc,
        [label]: `@media (min-width: ${this.sizes[label as keyof Sizes]}px)`,
      }), {}, _.keys(this.sizes))
    },
    // get media() {
    //   return _.reduce<string, Media>((acc, label) => ({
    //     ...acc,
    //     [label]: (...args: string[]) => css`
    //       @media (min-width: ${this.sizes[label as keyof Sizes]}px) {
    //         ${css(...args)}
    //       }
    //     `,
    //   }), {}, _.keys(this.sizes))
    // },
  },
  typography: {
    pxToRem,
  },
}

const theme: ThemeMap = {
  light: {
    ...common,
    palette: {
      ...common.palette,
      type: 'light',
      background: {
        default: 'transparent',
        paper: '#ffffff',
      },
      text: {
        default: '#212121',
        primary: '#424242',
        secondary: '#616161',
        tertiary: '#9e9e9e',
      },
    },
  },
  dark: {
    ...common,
    palette: {
      ...common.palette,
      type: 'dark',
      background: {
        default: '#060606',
        paper: '#060606',
      },
      text: {
        default: '#f5f6f7',
        primary: '#f5f5f5',
        secondary: '#eeeeee',
        tertiary: '#bdbdbd',
      },
      hexToRgb,
    },
  },
}

export default theme
