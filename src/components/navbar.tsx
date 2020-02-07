import { css, SerializedStyles } from '@emotion/core'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

import { ALPHA } from '../constants'
import { Theme } from '../styles/theme'

const Navbar: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          repository {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <nav>
      <ul css={s.menuList}>
        <li>
          <a
            css={s.link}
            href={data.site.siteMetadata.repository.url}
            target="_blank"
            rel="noopener noreferrer"
            title={data.site.siteMetadata.repository.name}
          >
            GitHub
          </a>
        </li>
        <li>
          <Link css={s.link} to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

const s = {
  menuList: css`
    display: flex;
    font-size: 1.25rem;
  `,
  link: (theme: Theme): SerializedStyles => css`
    display: block;
    width: 100%;
    height: 100%;
    padding: 8px;
    font-size: ${theme.typography.pxToRem(14)};
    font-weight: 500;
    text-transform: uppercase;
    transition: color 0.2s, background-color 0.2s;
    :hover, :focus {
      background-color: ${theme.palette.hexToRgb(theme.palette.primary.light, ALPHA)};
    }
  `,
}

export default Navbar
