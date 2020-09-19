/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash/fp'
import qs from 'query-string'
import { useMemo } from 'react'

import { twitterIcon } from '../assets/images'
import a11y from '../styles/a11y'
import ShareLink from './share-link'

type Props = {
  description: string;
  tags: string[];
  url: string;
}

const TwitterShareLink = ({ description, tags, url, ...otherProps }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitter {
            name
          }
        }
      }
    }
  `)

  const href = useMemo(() => _.join('', [
    'https://twitter.com/intent/tweet?',
    qs.stringify({
      hashtags: _.join(',', tags),
      text: description,
      via: data.site.siteMetadata.twitter.name,
      url,
    }),
  ]), [data.site.siteMetadata.twitter.name, description, tags, url])

  return (
    <ShareLink
      css={s.root}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="트위터로 공유하기"
      {...otherProps}
    >
      <span css={a11y}>트위터로 공유하기</span>
    </ShareLink>
  )
}

const s = {
  root: css`
    background-image: url(${twitterIcon});
  `,
}

export default TwitterShareLink
