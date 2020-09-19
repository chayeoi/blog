/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import _ from 'lodash/fp'
import { useMemo } from 'react'

import Headline from '../components/headline'
import Layout from '../components/layout'
import PostNavigation from '../components/post-navigation'
import Profile from '../components/profile'
import SEO from '../components/seo'
import SocialShare from '../components/social-share'
import Utterances from '../components/utterances'
import { CONTAINER_MAX_WIDTH } from '../constants'
import { Theme } from '../models/Theme'
import UnstructuredTocItem from '../models/UnstructuredTocItem'

type Props = {
  data: {
    mdx: {
      body: string;
      tableOfContents: {
        items: UnstructuredTocItem[];
      };
      frontmatter: {
        title: string;
        description: string;
        publishedAt: string;
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
        buyMeACoffee?: string;
        facebook: {
          author: string;
        };
        image: string;
        repository: {
          name: string;
        };
        siteUrl: string;
      };
    };
  };
  location: {
    href: string;
    pathname: string;
  };
  pageContext: {
    next?: {
      id: string;
      frontmatter: {
        title: string;
      };
      fields: {
        slug: string;
      };
    };
    previous?: {
      id: string;
      frontmatter: {
        title: string;
      };
      fields: {
        slug: string;
      };
    };
  };
}

const BlogPost = ({ data, location, pageContext }: Props) => {
  const {
    title,
    description,
    updatedAt,
    publishedAt,
    cover,
    tags,
  } = data.mdx.frontmatter
  const publicURL = cover?.publicURL
  const image = publicURL
    ? `${data.site.siteMetadata.siteUrl}${publicURL}`
    : data.site.siteMetadata.image

  const meta = useMemo(() => _.filter(item => Boolean(item.content), [
    {
      property: 'article:author',
      content: data.site.siteMetadata.facebook.author,
    },
    {
      property: 'article:published_time',
      content: publishedAt,
    },
    {
      property: 'article:modified_time',
      content: updatedAt,
    },
    {
      name: 'keywords',
      content: _.join(',', tags),
    },
  ]), [publishedAt, tags, updatedAt, data.site.siteMetadata.facebook.author])

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={image}
        type="article"
        url={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
        meta={meta}
      />
      <article css={s.article}>
        <Headline
          frontmatter={data.mdx.frontmatter}
          tableOfContents={data.mdx.tableOfContents}
        />
        <div css={s.wrapper}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
          <footer>
            <SocialShare
              frontmatter={data.mdx.frontmatter}
              url={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
            />
            <Profile css={s.profile} />
            <PostNavigation pageContext={pageContext} />
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
  profile: (theme: Theme): SerializedStyles => css`
    margin-bottom: 0.5rem;
    ${theme.breakpoints.media.sm} {
      margin-bottom: 1rem;
    }
    ${theme.breakpoints.media.md} {
      margin-bottom: 1.5rem;
    }
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
        publishedAt
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
        buyMeACoffee
        facebook {
          author
        }
        image
        repository {
          name
        }
        siteUrl
      }
    }
  }
`

export default BlogPost
