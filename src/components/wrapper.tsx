import { Global } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'

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

const Wrapper: React.FC = ({ children }) => (
  <ThemeProvider theme={theme.light}>
    <MDXProvider components={components}>
      <Global styles={global} />
      {children}
    </MDXProvider>
  </ThemeProvider>
)

export default Wrapper
