/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'

import { Theme } from '../models/Theme'
import KakaoShareLink from './kakao-share-link'

interface Props {
  url: string;
}

const SocialShare: React.FC<Props> = ({ url, ...otherProps }) => (
  <ul css={s.root} {...otherProps}>
    <li css={s.item}>
      <KakaoShareLink url={url} />
    </li>
  </ul>
)

const s = {
  root: (theme: Theme): SerializedStyles => css`
    display: flex;
    justify-content: flex-end;
    padding: 16px 0 0 0;
    ${theme.breakpoints.media.sm} {
      padding: 16px 0;
    }
  `,
  item: (theme: Theme): SerializedStyles => css`
    :not(:last-child) {
      margin-right: 1rem;
    }
    ${theme.breakpoints.media.sm} {
      :not(:last-child) {
        margin-right: 1.25rem;
      }
    }
  `,
}

export default SocialShare
