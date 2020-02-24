require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const FIRST_YEAR = 2018
const currentYear = new Date().getFullYear()

module.exports = {
  siteMetadata: {
    name: 'CHNY',
    title: 'CHNY.WORLD',
    description: '개발자 김찬연 TECH 블로그',
    image: 'https://repository-images.githubusercontent.com/238482693/10065400-563f-11ea-9f76-928d767a061d',
    author: '김찬연',
    repository: {
      name: 'chayeoi/blog',
      url: 'https://github.com/chayeoi/blog',
    },
    contacts: [
      { name: 'github', value: 'chayeoi', href: 'https://github.com/chayeoi' },
      { name: 'instagram', value: 'chayeoi', href: 'https://www.instagram.com/chayeoi/' },
      { name: 'facebook', value: 'chayeoi', href: 'https://www.facebook.com/chayeoi' },
      { name: 'twitter', value: 'chayeoi', href: 'https://twitter.com/goBoZYtJmdB3QRy' },
      { name: 'linkedin', value: 'chayeoi', href: `https://www.linkedin.com/in/${encodeURIComponent('찬연-김-928290177')}/` },
      { name: 'email', value: 'chayeoikeem@gmail.com', href: 'mailto://chayeoikeem@gmail.com' },
      { name: 'rss', value: 'https://chny.world/rss', href: 'https://feedly.com/i/subscription/feed/https://chny.world/rss.xml' },
      // { name: 'codepen', value: 'chayeoi' },
    ],
    facebook: {
      author: 'https://www.facebook.com/chayeoi',
    },
    twitter: {
      name: '@chayeoi',
    },
    about: {
      title: '개발자 김찬연',
      content: `
        수학교육을 전공한 후 창업 공부를 하다가 개발을 시작했고, 현재는 에듀테크 스타트업 클래스팅에서 ${currentYear - FIRST_YEAR + 1}년째 교육 서비스를 만들고 있습니다. 웹 표준과 새로운 기술 동향에 관심이 많습니다.
        음, 그런데 무슨 내용을 더 써야할 지 아직 모르겠.. 나중에 천천히 채워넣도록 하겠습니다. 그럼 이만! 😆
      `,
      name: '김찬연',
      intro: `
        하고 싶은 게 넘흐넘흐 많은 90년생 개발자.
        개인적인 생각, 최근 관심사 또는 새로 알게 된 내용에 대해 포스팅합니다.
      `,
      job: 'Developer',
      region: 'Seoul, Korea',
    },
    siteUrl: 'https://chny.world',
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => allMdx.edges.map(edge => Object.assign({}, edge.node.frontmatter, {
              description: edge.node.frontmatter.description,
              date: edge.node.frontmatter.createdAt,
              url: site.siteMetadata.siteUrl + edge.node.fields.slug,
              guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              custom_elements: [{ 'content:encoded': edge.node.html }],
            })),
            query: `
              {
                allMdx(
                  limit: 1000,
                  sort: { fields: [frontmatter___createdAt], order: DESC }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        createdAt
                        title
                        description
                        tags
                      }
                      fields {
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'RSS | CHNY',
          },
        ],
      },
    },
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              enableCustomId: true,
              icon: '<svg aria-hidden="true" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon-7f6730be--text-3f89f380"><g><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></g></svg>',
              isIconAfterHeader: true,
              maintainCase: false,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: {
                tsx: 'tsx',
              },
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    'gatsby-remark-autolink-headers',
    'gatsby-remark-copy-linked-files',
    'gatsby-remark-smartypants',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CHNY.WORLD',
        short_name: 'chny.world',
        start_url: '/',
        background_color: '#3d5afe',
        theme_color: '#3d5afe',
        display: 'standalone',
        icon: 'src/assets/images/logo.png',
        include_favicon: false,
      },
    },
    'gatsby-plugin-offline',
  ],
}
