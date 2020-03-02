/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Theme } from '../models/Theme'

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div css={s.root}>
        <h2 css={s.heading}>
          <span css={s.status}>404</span>
          <strong css={s.message}>
            NOT FOUND
          </strong>
        </h2>
        <p css={s.paragraph}>존재하지 않는 페이지입니다.</p>
      </div>
    </Layout>
  )
}

const s = {
  root: (theme: Theme): SerializedStyles => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    padding: 3rem 0;
    ${theme.breakpoints.media.sm} {
      padding: 4.5rem 0;
    }
    ${theme.breakpoints.media.md} {
      padding: 7.5rem 0;
    }
  `,
  heading: (theme: Theme): SerializedStyles => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    text-align: center;
    line-height: 1.2;
    ${theme.breakpoints.media.sm} {
      margin-bottom: 2rem;
    }
    ${theme.breakpoints.media.md} {
      margin-bottom: 2.5rem;
    }
  `,
  status: (theme: Theme): SerializedStyles => css`
    font-size: 5rem;
    font-weight: 700;
    ${theme.breakpoints.media.sm} {
      font-size: 10rem;
    }
    ${theme.breakpoints.media.md} {
      font-size: 12.5rem;
    }
  `,
  message: (theme: Theme): SerializedStyles => css`
    font-size: 2rem;
    font-weight: 300;
    ${theme.breakpoints.media.sm} {
      font-size: 3.5rem;
    }
    ${theme.breakpoints.media.md} {
      font-size: 4.5rem;
    }
  `,
  paragraph: (theme: Theme): SerializedStyles => css`
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
    ${theme.breakpoints.media.sm} {
      font-size: 1.125rem;
    }
    ${theme.breakpoints.media.md} {
      font-size: 1.25rem;
    }
  `,
}

export default NotFoundPage
