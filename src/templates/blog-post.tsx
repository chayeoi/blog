import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

interface Props {
  data: {
    mdx: {
      frontmatter: {
        title: string;
      };
      body: string;
    };
  };
}

const BlogPost: React.FC<Props> = ({ data }) => (
  <div>
    <h1>{data.mdx.frontmatter.title}</h1>
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
  </div>
)

export default BlogPost

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
