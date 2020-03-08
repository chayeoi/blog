import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import _ from 'lodash/fp'
import React, { useMemo } from 'react'

import Heading from '../components/heading'
import Intro from '../components/intro'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import SEO from '../components/seo'
import { CONTAINER_MAX_WIDTH } from '../constants'
import { Mdx } from '../models/Mdx'

interface Props {
  data: {
    site: {
      siteMetadata: {
        siteUrl: string;
        title: string;
      };
    };
    allMdx: {
      edges: Mdx[];
    };
  };
  location: {
    pathname: string;
  };
}

const HomePage: React.FC<Props> = ({ data, location }) => {
  const posts = data.allMdx.edges

  const meta = useMemo(() => _.filter(item => Boolean(item.content), [
    {
      name: 'keywords',
      content: '김찬연,chayeoi,chny,웹 개발,웹,리액트,자바스크립트,타입스크립트,React,Javascript,Typescript',
    },
  ]), [])

  return (
    <Layout>
      <SEO
        url={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
        meta={meta}
      />
      <Intro />
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
        siteUrl
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___publishedAt], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            tags
            publishedAt
            updatedAt
            cover {
              publicURL
              internal {
                mediaType
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
