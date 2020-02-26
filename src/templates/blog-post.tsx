import { css, SerializedStyles } from '@emotion/core'
import dayjs from 'dayjs'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import _ from 'lodash/fp'
import React, { useMemo } from 'react'

import Layout from '../components/layout'
import Profile from '../components/profile'
import SEO from '../components/seo'
import Sticky from '../components/sticky'
import TableOfContents from '../components/table-of-contents'
import Utterances from '../components/utterances'
import { CONTAINER_MAX_WIDTH } from '../constants'
import { Theme } from '../models/Theme'
import UnstructuredTocItem from '../models/UnstructuredTocItem'
import { getToc } from '../utils'

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
  const isModified = updatedAt && createdAt !== updatedAt
  const hasCover = Boolean(cover)
  const publicURL = cover?.publicURL
  const imageUrl = publicURL
    ? `${data.site.siteMetadata.siteUrl}${publicURL}`
    : ''

  const toc = useMemo(() => getToc(data.mdx.tableOfContents.items, 3), [data.mdx.tableOfContents.items])

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
        <header css={s.header}>
          <div css={s.container}>
            <h1 css={s.heading}>{title}</h1>
            <p css={s.description}>
              {description}
            </p>
            <ul css={s.dateList}>
              <li>
                <time dateTime={createdAt}>
                  {dayjs(createdAt).format('YYYY년 MM월 DD일')}
                </time>
                {isModified && (
                  <span>
                    {' '}
                    작성
                  </span>
                )}
              </li>
              {isModified && (
                <li>
                  <time dateTime={updatedAt}>
                    {dayjs(updatedAt).format('YYYY년 MM월 DD일')}
                  </time>
                  <span>
                    {' '}
                    수정
                  </span>
                </li>
              )}
            </ul>
            <div css={s.toc}>
              <Sticky top={112}>
                <TableOfContents toc={toc} />
              </Sticky>
            </div>
          </div>
          {hasCover
            ? (
              <div css={s.cover}>
                <Image css={s.image} fluid={cover?.childImageSharp.fluid} alt=""/>
              </div>
            ) : (
              <div css={s.placeholder} />
            )}
        </header>
        <div css={s.wrapper}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
          <footer>
            <Profile />
          </footer>
          <Utterances repo={data.site.siteMetadata.repository.name} />
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
  header: (theme: Theme): SerializedStyles => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 360px;
    color: #ffffff;
    ::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -10;
      background: ${theme.palette.hexToRgb(theme.palette.grey[800], 0.4)};
    }
  `,
  container: css`
    position: relative;
    width: 100%;
    padding: 24px 16px;
    max-width: ${CONTAINER_MAX_WIDTH}px;
    margin: 0 auto;
  `,
  heading: css`
    margin-bottom: 0.5rem;
    padding-top: 40px;
    font-size: 1.75rem;
    font-weight: 700;
  `,
  cover: css`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -100;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  `,
  image: css`
    height: 100%;
  `,
  placeholder: (theme: Theme): SerializedStyles => css`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -100;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: ${theme.palette.primary.dark};
  `,
  description: (theme: Theme): SerializedStyles => css`
    margin-bottom: 1.5rem;
    color: ${theme.palette.primary.contrastText};
  `,
  dateList: (theme: Theme): SerializedStyles => css`
    font-size: ${theme.typography.pxToRem(14)};
    font-weight: 300;
    text-align: right;
  `,
  toc: (theme: Theme): SerializedStyles => css`
    position: absolute;
    left: 100%;
    top: calc(100% + 96px);
    margin-left: 1.5rem;
    ${theme.breakpoints.media.xl} {
      margin-left: 4.5rem;
    }
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
