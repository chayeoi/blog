import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import global from './src/styles/global'
import theme from './src/styles/theme'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      {element}
    </ThemeProvider>
  )
}
