/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { useMemo } from 'react'

import { facebookIcon } from '../assets/images'
import { Theme } from '../models/Theme'
import a11y from '../styles/a11y'

interface Props {
  url: string;
}

const FacebookShareLink: React.FC<Props> = ({ url, ...otherProps }) => {
  const href = useMemo(() => encodeURI(`https://www.facebook.com/sharer/sharer.php?u=${url}/&amp;src=sdkpreparse`), [url])
  return (
    <a
      css={s.root}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="페이스북으로 공유하기"
      {...otherProps}
    >
      <span css={a11y}>페이스북으로 공유하기</span>
    </a>
  )
}

const s = {
  root: (theme: Theme): SerializedStyles => css`
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: url(${facebookIcon}) center / cover no-repeat;
    cursor: pointer;
    outline: none;
    transition: opacity 0.2s, box-shadow 0.2s, transform 0.2s;
    :hover, :focus {
      opacity: 0.85;
      box-shadow: 0 4px 8px 0 ${theme.palette.hexToRgb(theme.palette.primary.dark, 0.1)};
      transform: translateY(-4px);
    }
    ${theme.breakpoints.media.sm} {
      width: 40px;
      height: 40px;
    }
  `,
}

export default FacebookShareLink
