import { css, SerializedStyles } from '@emotion/core'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Utterances from '../components/utterances'
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

  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <article css={s.article}>
        <h1 css={s.heading}>{data.mdx.frontmatter.title}</h1>
        <ul css={s.dateList}>
          <li>
            <time dateTime={data.mdx.frontmatter.createdAt}>
              {data.mdx.frontmatter.createdAt}
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
              <time dateTime={data.mdx.frontmatter.createdAt}>
                {data.mdx.frontmatter.updatedAt}
              </time>
              <span>
                {' '}
                수정
              </span>
            </li>
          )}
        </ul>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Utterances repo={data.site.siteMetadata.repository.name} />
      </article>
    </Layout>
  )
}

const s = {
  article: css`
    padding: 24px 16px;
    font-size: 16px;
    line-height: 1.8;
  `,
  heading: css`
    margin-bottom: 0.5rem;
    padding-top: 40px;
    font-size: 1.75rem;
    font-weight: 700;
  `,
  dateList: (theme: Theme): SerializedStyles => css`
    margin-bottom: 4rem;
    color: ${theme.palette.grey[800]};
    font-size: ${theme.typography.pxToRem(14)};
    font-weight: 500;
    text-align: right;
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
        createdAt(formatString: "YYYY년 MM월 DD일")
        updatedAt(formatString: "YYYY년 MM월 DD일")
        tags
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
