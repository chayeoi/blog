/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import _ from 'lodash/fp'
import { useMemo } from 'react'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'
import Profile from '../components/profile'
import SEO from '../components/seo'
import Utterances from '../components/utterances'
import { CONTAINER_MAX_WIDTH } from '../constants'
import UnstructuredTocItem from '../models/UnstructuredTocItem'

interface Props {
  data: {
    mdx: {
      body: string;
      tableOfContents: {
        items: UnstructuredTocItem[];
      };
      frontmatter: {
        title: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        tags: string[];
        cover?: {
          childImageSharp: {
            fluid: {
              aspectRatio: number;
              sizes: string;
              src: string;
              srcSet: string;
            };
          };
          publicURL: string;
          internal: {
            mediaType: string;
          };
        };
      };
    };
    site: {
      siteMetadata: {
        facebook: {
          author: string;
        };
        repository: {
          name: string;
        };
        siteUrl: string;
      };
    };
  };
  location: {
    pathname: string;
  };
}

const BlogPost: React.FC<Props> = ({ data, location }) => {
  const {
    title,
    description,
    updatedAt,
    createdAt,
    cover,
    tags,
  } = data.mdx.frontmatter
  const publicURL = cover?.publicURL
  const imageUrl = publicURL
    ? `${data.site.siteMetadata.siteUrl}${publicURL}`
    : ''

  const meta = useMemo(() => _.filter(item => Boolean(item.content), [
    {
      property: 'article:author',
      content: data.site.siteMetadata.facebook.author,
    },
    {
      property: 'article:published_time',
      content: createdAt,
    },
    {
      property: 'article:modified_time',
      content: updatedAt,
    },
    {
      name: 'keywords',
      content: _.join(',', tags),
    },
  ]), [createdAt, tags, updatedAt, data.site.siteMetadata.facebook.author])

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={imageUrl}
        type="article"
        url={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
        meta={meta}
      />
      <article css={s.article}>
        <PostHeader
          frontmatter={data.mdx.frontmatter}
          tableOfContents={data.mdx.tableOfContents}
        />
        <div css={s.wrapper}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
          <footer>
            <Profile />
            <Utterances repo={data.site.siteMetadata.repository.name} />
          </footer>
        </div>
      </article>
    </Layout>
  )
}

const s = {
  article: css`
    font-size: 16px;
    line-height: 1.8;
  `,
  wrapper: css`
    max-width: ${CONTAINER_MAX_WIDTH}px;
    margin: 0 auto;
    padding: 48px 16px 24px;
  `,
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      tableOfContents
      frontmatter {
        title
        description
        createdAt
        updatedAt
        tags
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
          internal {
            mediaType
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          author
        }
        repository {
          name
        }
        siteUrl
      }
    }
  }
`

export default BlogPost
