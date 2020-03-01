const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      value: `/posts${value}`,
      node,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___createdAt], order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            id
            fields {
              slug
            }
          }
          next {
            frontmatter {
              title
            }
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ next, node, previous }) => {

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        id: node.id,
        next,
        previous,
      },
    })
  })
}
