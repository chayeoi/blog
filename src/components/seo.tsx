import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

interface Props {
  description?: string;
  image?: string;
  lang?: string;
  link?: any[];
  meta?: any[];
  title: string;
  type?: 'website' | 'article';
  url?: string;
}

const SEO: React.FC<Props> = ({
  description = '',
  image = '',
  lang = 'ko',
  link = [],
  meta = [],
  title,
  type = 'website',
  url = '',
}) => {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            author
            siteUrl
            twitter {
              name
            }
          }
        }
        file(relativePath: {eq: "images/splash.png"}) {
          publicURL
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || site.siteMetadata.image
  const metaUrl = url || site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title as string}`}
      link={[
        {
          rel: 'canonical',
          href: url,
        },
        {
          rel: 'apple-touch-startup-image',
          href: file.publicURL,
        },
      ].concat(link)}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'author',
          content: site.siteMetadata.author,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          property: 'og:type',
          content: type,
        },
        {
          property: 'og:site_name',
          content: site.siteMetadata.title,
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          property: 'og:locale',
          content: 'ko_KR',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.twitter.name,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: metaImage,
        },
        {
          name: 'application-name',
          content: site.siteMetadata.title,
        },
        {
          name: 'mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: ' apple-mobile-web-app-title',
          content: site.siteMetadata.title,
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'white',
        },
        {
          name: 'naver-site-verification',
          content: process.env.NAVER_SITE_VERIFICATION_KEY,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
