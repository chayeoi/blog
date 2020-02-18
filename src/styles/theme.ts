import { css } from '@emotion/core'
import _ from 'lodash/fp'

import { Media, Sizes, Theme } from '../models/Theme'
import { hexToRgb, pxToRem } from '../utils'

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
      main: '#00b6f3',
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
