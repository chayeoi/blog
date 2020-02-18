import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import React from 'react'

import Heading from '../components/heading'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import SEO from '../components/seo'
import { CONTAINER_MAX_WIDTH } from '../constants'
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
      <div css={s.intro}>
        개발자 개발자
      </div>
      <div css={s.wrapper}>
        <Heading css={s.heading}>
          포스트 목록
        </Heading>
        <PostList posts={posts} />
      </div>
    </Layout>
  )
}

const s = {
  intro: css`
    display: flex;
    align-items: flex-end;
    height: 360px;
    padding: 32px;
    color: #fff;
    background-color: #212121;
    font-size: 3rem;
    font-weight: bold;
  `,
  wrapper: css`
    max-width: ${CONTAINER_MAX_WIDTH}px;
    margin: 0 auto auto;
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
