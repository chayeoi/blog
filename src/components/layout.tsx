import 'typeface-montserrat'

import { css } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Footer from './footer'
import Header from './header'
import Wave from './wave'

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div css={s.wrapper}>
        <main css={s.main}>{children}</main>
        <Footer />
        <div css={s.wave}>
          <Wave />
        </div>
      </div>
    </>
  )
}

const s = {
  wrapper: css`
    position: relative;
    padding: 88px 0 64px;
  `,
  main: css`
    margin: 0 auto;
  `,
  wave: css`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -100;
  `,
}

export default Layout
