/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash/fp'
import qs from 'query-string'
import { useMemo } from 'react'

import { twitterIcon } from '../assets/images'
import { Theme } from '../models/Theme'
import a11y from '../styles/a11y'

interface Props {
  description: string;
  tags: string[];
  url: string;
}

const TwitterShareLink: React.FC<Props> = ({ description, tags, url, ...otherProps }) => {
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
    <a
      css={s.root}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="트위터로 공유하기"
      {...otherProps}
    >
      <span css={a11y}>트위터로 공유하기</span>
    </a>
  )
}

const s = {
  root: (theme: Theme): SerializedStyles => css`
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: url(${twitterIcon}) center / cover no-repeat;
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

export default TwitterShareLink
