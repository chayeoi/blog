import { css, SerializedStyles } from '@emotion/core'
import { Link } from 'gatsby'
import React from 'react'

import { Theme } from '../models/Theme'
import Navbar from './navbar'

interface Props {
  siteTitle?: string;
}

const Header: React.FC<Props> = ({ siteTitle = '' }) => (
  <header css={s.header}>
    <h1 css={s.title}>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <Navbar />
  </header>
)

const s = {
  header: (theme: Theme): SerializedStyles => css`
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 24px 16px;
    background: ${theme.palette.hexToRgb(theme.palette.primary.contrastText, 0.8)};
  `,
  title: css`
    font-size: 2.5rem;
    font-weight: 700;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
}

export default Header
