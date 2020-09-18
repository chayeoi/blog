/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'

import { CONTENT_LINK } from '../constants'
import { Theme } from '../models/Theme'

const SkipLink = (props: object) => (
  <a css={s.root} href={`#${CONTENT_LINK}`} {...props}>
    본문 바로가기
  </a>
)

const s = {
  root: (theme: Theme): SerializedStyles => css`
    position: fixed;
    z-index: 1000;
    top: 24px;
    left: 16px;
    padding: 12px 16px;
    border-radius: 2px;
    font-size: 14px;
    color: ${theme.palette.primary.contrastText};
    background-color: ${theme.palette.primary.main};
    transform-style: preserve-3d;
    transform: perspective(800px) translateY(-100px) rotateX(-1turn);
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    :focus {
      color: ${theme.palette.primary.contrastText};
      transform: none;
    }
  `,
}

export default SkipLink
