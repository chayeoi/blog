/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'

import { Theme } from '../models/Theme'

const Intro: React.FC = () => {
  return (
    <div css={s.root}>
      <span>개발자 김찬연</span>
      <strong css={s.strong}>TECH BLOG</strong>
    </div>
  )
}

const s = {
  root: (theme: Theme): SerializedStyles => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 360px;
    padding: 32px;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.3;
    text-align: center;
    ${theme.breakpoints.media.sm} {
      font-size: 3rem;
    }
  `,
  strong: (theme: Theme): SerializedStyles => css`
    font-size: 2.25rem;
    font-weight: 700;
    ${theme.breakpoints.media.sm} {
      font-size: 4rem;
    }
  `,
}

export default Intro
