/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import dayjs from 'dayjs'
import { Link } from 'gatsby'
import _ from 'lodash/fp'

import { ALPHA, PNG } from '../constants'
import { Mdx } from '../models/Mdx'
import { Theme } from '../models/Theme'

interface Props {
  post: Mdx;
}

const PostItem: React.FC<Props> = ({ post }) => {
  const hasCover = Boolean(post.node.frontmatter.cover)

  return (
    <li css={s.postItem}>
      <Link css={s.link} to={post.node.fields.slug}>
        <h3 css={s.heading}>
          {post.node.frontmatter.title}
        </h3>
        <time css={s.createdAt} dateTime={post.node.frontmatter.createdAt}>
          {dayjs(post.node.frontmatter.createdAt).format('YYYY년 MM월 DD일')}
        </time>
        <p css={s.description}>{post.node.frontmatter.description}</p>
        <div
          css={(theme: Theme): SerializedStyles => css`
                  position: relative;
                  order: -1;
                  margin-bottom: 1rem;
                  padding-top: 36%;
                  background:
                    ${theme.palette.grey[200]}
                    center
                    no-repeat;
                  ${hasCover && css`
                    background-color: transparent;
                    background-image: url(${post.node.frontmatter.cover?.publicURL});
                    background-size: ${post.node.frontmatter.cover?.internal.mediaType === PNG ? 'contain' : 'cover'};
                    ::before {
                      content: '';
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      left: 0;
                      right: 0;
                      background: ${theme.palette.hexToRgb(theme.palette.grey[900], ALPHA)};
                    }
                  `}
                `}
        >
          <ul css={s.tagList}>
            {_.map(tag => (
              <li key={tag} css={s.tagItem}>
                {`#${tag}`}
              </li>
            ), post.node.frontmatter.tags)}
          </ul>
        </div>
      </Link>
    </li>
  )
}

const s = {
  postItem: css`
    margin: 0 -0.5rem;
    :not(:last-child) {
      margin-bottom: 1.5rem;
    }
  `,
  heading: (theme: Theme): SerializedStyles => css`
    margin-bottom: 0.5rem;
    color: ${theme.palette.text.primary};
    font-size: ${theme.typography.pxToRem(24)};
    font-weight: 700;
    line-height: 1.2;
  `,
  createdAt: (theme: Theme): SerializedStyles => css`
    display: block;
    margin-bottom: 0.5rem;
    color: ${theme.palette.text.tertiary};
    font-size: ${theme.typography.pxToRem(14)};
  `,
  link: (theme: Theme): SerializedStyles => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 12px 8px;
    :hover, :focus {
      background-color: ${theme.palette.hexToRgb(theme.palette.grey[900], 0.03)};
      h3 {
        color: ${theme.palette.primary.main};
      }
    }
  `,
  description: (theme: Theme): SerializedStyles => css`
    margin-bottom: 0.75rem;
    color: ${theme.palette.text.secondary};
    line-height: 1.4;
  `,
  tagList: (theme: Theme): SerializedStyles => css`
    position: absolute;
    bottom: 0.25rem;
    right: 0.25rem;
    display: flex;
    justify-content: flex-end;
    ${theme.breakpoints.media.sm} {
      bottom: 0.5rem;
      right: 0.5rem;
    }
  `,
  tagItem: (theme: Theme): SerializedStyles => css`
    padding: 6px 8px;
    color: ${theme.palette.primary.contrastText};
    border-radius: 4px;
    font-size: ${theme.typography.pxToRem(12)};
    :not(:last-child) {
      margin-right: 0.25rem;
    }
    ${theme.breakpoints.media.sm} {
      font-size: ${theme.typography.pxToRem(14)};
    }
  `,
}

export default PostItem
