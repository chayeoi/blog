import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { splash } from '../assets/images'

interface Props {
  description?: string;
  image?: string;
  lang?: string;
  link?: any[];
  meta?: any[];
  title?: string;
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
  const { site, favicon } = useStaticQuery(
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
        favicon: file(relativePath: { eq: "images/favicon.png" }) {
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
      defaultTitle={site.siteMetadata.title}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title as string}`}
      link={[
        {
          rel: 'icon',
          href: favicon.publicURL,
        },
        {
          rel: 'canonical',
          href: url,
        },
        {
          rel: 'apple-touch-startup-image',
          href: splash.iphone5,
          media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: splash.iphone6,
          media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: splash.iphoneplus,
          media: '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: splash.iphonex,
          media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: splash.iphonexr,
          media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: splash.iphonexsmax,
          media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: splash.ipad,
          media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: splash.ipadpro1,
          media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: splash.ipadpro2,
          media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: splash.ipadpro3,
          media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
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
          content: title ? `${title} | ${site.siteMetadata.title as string}` : site.siteMetadata.title,
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
          name: ' apple-mobile-web-app-title',
          content: site.siteMetadata.title,
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'default',
        },
      ].concat(meta)}
    />
  )
}

export default SEO
