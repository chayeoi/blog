/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useMemo } from 'react'

import { facebookIcon } from '../assets/images'
import a11y from '../styles/a11y'
import ShareLink from './share-link'

interface Props {
  url: string;
}

const FacebookShareLink = ({ url, ...otherProps }: Props) => {
  const href = useMemo(() => encodeURI(`https://www.facebook.com/sharer/sharer.php?u=${url}/&amp;src=sdkpreparse`), [url])

  return (
    <ShareLink
      css={s.root}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="페이스북으로 공유하기"
      {...otherProps}
    >
      <span css={a11y}>페이스북으로 공유하기</span>
    </ShareLink>
  )
}

const s = {
  root: css`
    background-image: url(${facebookIcon});
  `,
}

export default FacebookShareLink
