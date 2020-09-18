/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'

import { Mdx } from '../models/Mdx'
import PostItem from './post-item'

interface Props {
  posts: Mdx[];
}

const PostList = ({ posts }: Props) => (
  <ol>
    {_.map((post: Mdx) => (
      <PostItem key={post.node.id} post={post} />
    ), posts)}
  </ol>
)

export default PostList
