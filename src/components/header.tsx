/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { Link } from 'gatsby'

import { HEADER_MIN_WIDTH } from '../constants'
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
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: ${HEADER_MIN_WIDTH}px;
    padding: 24px 16px;
    background: ${theme.palette.primary.contrastText};
    border: 1px solid ${theme.palette.grey[200]};
  `,
  title: css`
    font-size: 2.25rem;
    font-weight: 700;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
}

export default Header
