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
        { key: 0, value: `수학교육을 전공한 후 좋은 기회가 생겨 개발을 시작했고, 현재는 에듀테크 스타트업 클래스팅에서 ${currentYear - FIRST_YEAR + 1}년째 교육 서비스를 만들고 있습니다. 웹 표준과 새로운 기술 동향에 관심이 많습니다.` },
        { key: 1, value: '\n' },
        { key: 2, value: '음, 그런데 무슨 내용을 더 써야할 지 아직 모르겠.. 나중에 천천히 채워넣도록 하겠습니다. 그럼 이만! 😆' },
      ],
    },
    siteUrl: 'https://chny.netlify.com',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-lodash',
    'gatsby-plugin-mdx',
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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-images-medium-zoom',
            options: {
              margin: 36,
              scrollOffset: 0,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '%',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
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
