import { css, SerializedStyles } from '@emotion/core'
import { graphql } from 'gatsby'
import React from 'react'

import Heading from '../components/heading'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import SEO from '../components/seo'
import { CONTAINER_MAX_WIDTH } from '../constants'
import { Mdx } from '../models/Mdx'
import { Theme } from '../models/Theme'

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
        <span>개발자 김찬연</span>
        <strong css={s.strong}>TECH BLOG</strong>
      </div>
      <div css={s.wrapper}>
        <Heading css={s.heading}>
          최근 포스트
        </Heading>
        <PostList posts={posts} />
      </div>
    </Layout>
  )
}

const s = {
  intro: (theme: Theme): SerializedStyles => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 360px;
    padding: 32px;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.3;
    text-align: center;
    ${theme.breakpoints.media.sm} {
      font-size: 3rem;
    }
  `,
  strong: (theme: Theme): SerializedStyles => css`
    font-size: 2.25rem;
    font-weight: 700;
    ${theme.breakpoints.media.sm} {
      font-size: 4rem;
    }
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
