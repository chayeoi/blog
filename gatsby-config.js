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
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-lodash',
    'gatsby-plugin-mdx',
    'gatsby-plugin-offline',
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
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png',
      },
    },
  ],
}
