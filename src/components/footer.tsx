import { css, SerializedStyles } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { CONTAINER_MAX_WIDTH } from '../constants'
import { Theme } from '../models/Theme'
import Contacts from './contacts'

const Footer: React.FC = props => {
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
    <footer css={s.root} {...props}>
      <Contacts contacts={data.site.siteMetadata.contacts} />
      <small css={s.copyright}>© {new Date().getFullYear()} — Made by <em css={s.author}>CHNY</em></small>
    </footer>
  )
}

const s = {
  root: css`
    width: 100%;
    max-width: ${CONTAINER_MAX_WIDTH}px;
    margin: 0 auto;
    padding: 8px 16px;
  `,
  copyright: (theme: Theme): SerializedStyles => css`
    display: block;
    color: ${theme.palette.text.primary};
    font-size: ${theme.typography.pxToRem(14)};
    font-style: italic;
    text-align: center;
  `,
  author: css`
    font-weight: 700;
  `,
}

export default Footer
