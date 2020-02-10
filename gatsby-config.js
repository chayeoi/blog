const FIRST_YEAR = 2018
const currentYear = new Date().getFullYear()

module.exports = {
  siteMetadata: {
    title: 'CHNY',
    description: 'My Personal Blog',
    author: '@chayeoi',
    repository: {
      name: 'chayeoi/blog',
      url: 'https://github.com/chayeoi/blog',
    },
    contacts: [
      { name: 'github', value: 'chayeoi', href: 'https://github.com/chayeoi' },
      { name: 'instagram', value: 'chayeoi', href: 'https://www.instagram.com/chayeoi/' },
      { name: 'facebook', value: 'chayeoi', href: 'https://www.facebook.com/chayeoi' },
      { name: 'twitter', value: 'chayeoi', href: 'https://twitter.com/goBoZYtJmdB3QRy' },
      { name: 'linkedin', value: 'chayeoi', href: 'https://www.linkedin.com/in/%EC%B0%AC%EC%97%B0-%EA%B9%80-928290177/' },
      { name: 'email', value: 'chayeoikeem@gmail.com', href: 'mailto://chayeoikeem@gmail.com' },
      // { name: 'rss', value: '' },
      // { name: 'codepen', value: 'chayeoi' },
    ],
    about: {
      title: '개발자 김찬연',
      content: [
        { key: 0, value: `수학교육을 전공한 후 창업 공부를 하다가 개발을 시작했고, 현재는 에듀테크 스타트업 클래스팅에서 ${currentYear - FIRST_YEAR + 1}년째 교육 서비스를 만들고 있습니다. 웹 표준과 새로운 기술 동향에 관심이 많습니다.` },
        { key: 1, value: '\n' },
        { key: 2, value: '음, 그런데 무슨 내용을 더 써야할 지 아직 모르겠.. 나중에 천천히 채워넣도록 하겠습니다. 그럼 이만! 😆' },
      ],
    },
    siteUrl: 'https://chny.netlify.com',
  },
  plugins: [
    'gatsby-plugin-emotion',
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
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
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
        name: 'CHNY Blog',
        short_name: 'CHNY',
        start_url: '/',
        background_color: '#3d5afe',
        theme_color: '#3d5afe',
        display: 'standalone',
        icon: 'src/assets/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
