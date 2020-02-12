import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import React from 'react'

import Heading from '../components/heading'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import SEO from '../components/seo'
import { Mdx } from '../models/Mdx'

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    allMdx: {
      edges: Mdx[];
    };
  };
}

const HomePage: React.FC<Props> = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div css={s.wrapper}>
        <Heading css={s.heading}>
          글 목록
        </Heading>
        <PostList posts={posts} />
      </div>
    </Layout>
  )
}

const s = {
  wrapper: css`
    padding: 24px 16px;
  `,
  heading: css`
    margin-bottom: 2rem;
  `,
}

export default HomePage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___createdAt], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            tags
            createdAt(formatString: "YYYY년 MM월 DD일")
            updatedAt(formatString: "YYYY년 MM월 DD일")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
