import { Global } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'emotion-theming'
import React, { useEffect, useState } from 'react'

import { ColorMode } from '../constants'
import ColorModeContext from '../contexts/color-mode-context'
import global from '../styles/global'
import theme from '../styles/theme'
import * as MDXComponents from './mdx-components'

interface Components {
  [key: string]: React.FC;
}

const components: Components = {
  a: MDXComponents.Anchor,
  h1: MDXComponents.H1,
  h2: MDXComponents.H2,
  h3: MDXComponents.H3,
  h4: MDXComponents.H4,
  h5: MDXComponents.H5,
  h6: MDXComponents.H6,
  ul: MDXComponents.UnorderedList,
  ol: MDXComponents.OrderedList,
  li: MDXComponents.ListItem,
  p: MDXComponents.Paragraph,
  blockquote: MDXComponents.Blockquote,
  table: MDXComponents.Table,
  tr: MDXComponents.TableRow,
  th: MDXComponents.TableCell,
  td: MDXComponents.TableCell,
}

const Wrapper: React.FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>(ColorMode.LIGHT)

  useEffect(() => {
    const value: ColorMode = localStorage.getItem('colorMode') as ColorMode || ColorMode.LIGHT

    setColorMode(value)
  }, [])

  useEffect(() => {
    localStorage.setItem('colorMode', colorMode)
  }, [colorMode])

  return (
    <ColorModeContext.Provider value={[colorMode, setColorMode]}>
      <ThemeProvider theme={theme[colorMode]}>
        <MDXProvider components={components}>
          <Global styles={global} />
          {children}
        </MDXProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Wrapper
