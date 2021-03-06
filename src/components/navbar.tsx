/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { Link } from 'gatsby'
import { memo } from 'react'

import { ALPHA } from '../constants'
import { Theme } from '../models/Theme'
import ThemeSwitch from './theme-switch'

const Navbar = memo(() => (
  <nav>
    <ul css={s.menuList}>
      <li>
        <Link css={s.link} to="/about">About</Link>
      </li>
      <li>
        <ThemeSwitch />
      </li>
    </ul>
  </nav>
))

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
