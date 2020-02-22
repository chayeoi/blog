/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { Link } from 'gatsby'
import _ from 'lodash/fp'
import { useCallback, useEffect, useState } from 'react'

import { ColorMode, HEADER_MIN_HEIGHT } from '../constants'
import { usePrevious } from '../hooks'
import { Theme } from '../models/Theme'
import Navbar from './navbar'

interface Props {
  siteTitle?: string;
}

const Header: React.FC<Props> = ({ siteTitle = '' }) => {
  const [scrollY, setScrollY] = useState(typeof window === 'undefined' ? 0 : window.pageYOffset)

  const prevScrollY = usePrevious(scrollY)

  const visible = scrollY <= HEADER_MIN_HEIGHT || scrollY <= prevScrollY || _.isUndefined(prevScrollY)

  const handleScroll = useCallback(_.throttle(100, () => {
    if (window.pageYOffset >= HEADER_MIN_HEIGHT) {
      setScrollY(window.pageYOffset)
    }
  }), [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <header
      css={s.header}
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? 0 : -100}%)`,
      }}
    >
      <h1 css={s.title}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <Navbar />
    </header>
  )
}

const s = {
  header: (theme: Theme): SerializedStyles => css`
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: ${HEADER_MIN_HEIGHT}px;
    padding: 24px 16px;
    background: ${theme.palette.background.paper};
    border-bottom: 1px solid ${theme.palette.grey[theme.palette.type === ColorMode.LIGHT ? 200 : 800]};
    transition:
      transform 0.5s,
      opacity 0.3s,
      border 0.3s,
      background-color 0.3s;
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
