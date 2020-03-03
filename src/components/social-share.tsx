/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'

import { Theme } from '../models/Theme'
import FacebookShareLink from './facebook-share-link'
import KakaoShareLink from './kakao-share-link'
import TwitterShareLink from './twitter-share-link'

interface Props {
  url: string;
  frontmatter: {
    description: string;
    tags: string[];
  };
}

const SocialShare: React.FC<Props> = ({ frontmatter, url, ...otherProps }) => (
  <ul css={s.root} {...otherProps}>
    <li css={s.item}>
      <FacebookShareLink url={url} />
    </li>
    <li css={s.item}>
      <TwitterShareLink
        description={frontmatter.description}
        tags={frontmatter.tags}
        url={url}
      />
    </li>
    <li css={s.item}>
      <KakaoShareLink url={url} />
    </li>
  </ul>
)

const s = {
  root: (theme: Theme): SerializedStyles => css`
    display: flex;
    justify-content: center;
    padding: 40px 0 24px 0;
    ${theme.breakpoints.media.sm} {
      padding: 64px 0;
    }
  `,
  item: (theme: Theme): SerializedStyles => css`
    :not(:last-child) {
      margin-right: 1rem;
    }
    ${theme.breakpoints.media.sm} {
      :not(:last-child) {
        margin-right: 1.5rem;
      }
    }
  `,
}

export default SocialShare
