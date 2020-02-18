import { css } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Footer from './footer'
import Header from './header'
// import Wave from './wave'

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
    <div css={s.root}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div css={s.wrapper}>
        <main css={s.main}>{children}</main>
        <Footer />
        {/* <Wave css={s.wave} /> */}
      </div>
    </div>
  )
}

const s = {
  root: css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `,
  wrapper: css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  `,
  main: css`
    width: 100%;
  `,
  wave: css`
    position: relative;
    bottom: -3px;
  `,
}

export default Layout
