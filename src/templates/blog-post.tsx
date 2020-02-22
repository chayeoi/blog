import { css, SerializedStyles } from '@emotion/core'
import dayjs from 'dayjs'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

import Layout from '../components/layout'
import Profile from '../components/profile'
import SEO from '../components/seo'
import Utterances from '../components/utterances'
import { CONTAINER_MAX_WIDTH } from '../constants'
import { Theme } from '../models/Theme'

interface Props {
  data: {
    mdx: {
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
      body: string;
    };
    site: {
      siteMetadata: {
        repository: {
          name: string;
        };
      };
    };
  };
}

const BlogPost: React.FC<Props> = ({ data }) => {
  const isModified = data.mdx.frontmatter.updatedAt && data.mdx.frontmatter.createdAt !== data.mdx.frontmatter.updatedAt
  const hasCover = Boolean(data.mdx.frontmatter.cover)

  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <article css={s.article}>
        <header css={s.header}>
          <div css={s.container}>
            <h1 css={s.heading}>{data.mdx.frontmatter.title}</h1>
            <p css={s.description}>
              {data.mdx.frontmatter.description}
            </p>
            <ul css={s.dateList}>
              <li>
                <time dateTime={data.mdx.frontmatter.createdAt}>
                  {dayjs(data.mdx.frontmatter.createdAt).format('YYYY년 MM월 DD일')}
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
                  <time dateTime={data.mdx.frontmatter.updatedAt}>
                    {dayjs(data.mdx.frontmatter.updatedAt).format('YYYY년 MM월 DD일')}
                  </time>
                  <span>
                    {' '}
                    수정
                  </span>
                </li>
              )}
            </ul>
          </div>
          {hasCover
            ? (
              <div css={s.cover}>
                <Image css={s.image} fluid={data.mdx.frontmatter.cover?.childImageSharp.fluid} alt=""/>
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
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 360px;
    color: #fff;
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
  wrapper: css`
    max-width: ${CONTAINER_MAX_WIDTH}px;
    margin: 0 auto;
    padding: 48px 16px 24px;
  `,
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
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
        repository {
          name
        }
      }
    }
  }
`

export default BlogPost
