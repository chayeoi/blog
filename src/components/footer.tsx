import { css, SerializedStyles } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { Theme } from '../styles/theme'
import Contacts from './contacts'

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          contacts {
            name
            value
            href
          }
        }
      }
    }
  `)

  return (
    <footer css={s.root}>
      <Contacts contacts={data.site.siteMetadata.contacts} />
      <small css={s.copyright}>© {new Date().getFullYear()} — Made by <em css={s.author}>CHNY</em></small>
    </footer>
  )
}

const s = {
  root: css`
    padding: 8px 16px;
  `,
  copyright: (theme: Theme): SerializedStyles => css`
    display: block;
    color: ${theme.palette.grey[800]};
    font-size: ${theme.typography.pxToRem(14)};
    font-style: italic;
    text-align: right;
  `,
  author: css`
    font-weight: 700;
  `,
}

export default Footer
