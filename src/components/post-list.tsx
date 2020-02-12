import { css, SerializedStyles } from '@emotion/core'
import _ from 'lodash/fp'
import React from 'react'

import { Theme } from '../models/Theme'

interface Post {
  node: {
    id: string;
    frontmatter: {
      title: string;
      description: string;
      tags?: string[];
      createdAt: string;
      updatedAt?: string;
    };
    fields: {
      slug: string;
    };
  };
}

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => (
  <ol>
    {_.map(post => (
      <li key={post.node.id} css={s.postItem}>
        <a css={s.anchorBlock} href={post.node.fields.slug}>
          <h3 css={s.heading}>
            {post.node.frontmatter.title}
          </h3>
          <time css={s.createdAt} dateTime={post.node.frontmatter.createdAt}>
            {post.node.frontmatter.createdAt}
          </time>
          <p css={s.description}>{post.node.frontmatter.description}</p>
          <ul css={s.tagList}>
            {_.map(tag => (
              <li key={tag} css={s.tagItem}>
                {`#${tag}`}
              </li>
            ), post.node.frontmatter.tags)}
          </ul>
        </a>
      </li>
    ), posts)}
  </ol>
)

const s = {
  postItem: css`
    margin: 0 -0.5rem;
    :not(:last-child) {
      margin-bottom: 1.5rem;
    }
  `,
  heading: (theme: Theme): SerializedStyles => css`
    margin-bottom: 0.5rem;
    color: ${theme.palette.grey[800]};
    font-size: ${theme.typography.pxToRem(24)};
    font-weight: 700;
    line-height: 1.2;
  `,
  anchorBlock: (theme: Theme): SerializedStyles => css`
    display: block;
    width: 100%;
    height: 100%;
    padding: 12px 8px;
    :hover, :focus {
      background-color: ${theme.palette.hexToRgb(theme.palette.primary.main, 0.08)};
    }
  `,
  description: (theme: Theme): SerializedStyles => css`
    margin-bottom: 0.75rem;
    color: ${theme.palette.grey[700]};
    line-height: 1.4;
  `,
  tagList: css`
    display: flex;
    justify-content: flex-end;
  `,
  tagItem: (theme: Theme): SerializedStyles => css`
    padding: 6px 8px;
    color: ${theme.palette.primary.contrastText};
    background-color: ${theme.palette.primary.main};
    border-radius: 4px;
    font-size: ${theme.typography.pxToRem(12)};
    :not(:last-child) {
      margin-right: 0.25rem;
    }
  `,
  createdAt: (theme: Theme): SerializedStyles => css`
    display: block;
    margin-bottom: 0.5rem;
    color: ${theme.palette.grey[500]};
    font-size: ${theme.typography.pxToRem(14)};
  `,
}

export default PostList
