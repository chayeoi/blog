import { Global } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'

import * as MDXComponents from '../src/components/mdx-components'
import global from '../src/styles/global'
import theme from '../src/styles/theme'

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

const wrapRootElement = ({ element }: { element: React.ReactNode }): React.ReactNode => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
      <Global styles={global} />
      {element}
    </MDXProvider>
  </ThemeProvider>
)

export default wrapRootElement;
