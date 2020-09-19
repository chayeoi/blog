import { css, SerializedStyles } from '@emotion/core'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import _ from 'lodash/fp'
import React, { useMemo } from 'react'

import Heading from '../components/heading'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { CONTAINER_MAX_WIDTH } from '../constants'
import { Theme } from '../models/Theme'

interface Phrase {
  key: number;
  value: string;
}

type Props = {
  data: {
    site: {
      siteMetadata: {
        about: {
          title: string;
          content: string;
        };
        siteUrl: string;
      };
    };
    file: {
      childImageSharp: {
        fluid: {
          aspectRatio: number;
          sizes: string;
          src: string;
          srcSet: string;
        };
      };
    };
  };
  location: {
    pathname: string;
  };
}

const AboutPage = ({ data, location }: Props) => {
  const phrases = _.compose(
    // @ts-ignore
    _.map.convert({ cap: false })((p: string, index: number): Phrase => ({
      key: index,
      value: _.trim(p),
    })),
    _.filter((p: string) => Boolean(_.trim(p))),
    _.split('\n'),
  )(data.site.siteMetadata.about.content)

  const meta = useMemo(() => _.filter(item => Boolean(item.content), [
    {
      name: 'keywords',
      content: '김찬연,chayeoi',
    },
  ]), [])

  return (
    <Layout>
      <SEO
        title="소개"
        url={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
        meta={meta}
      />
      <div css={s.wrapper}>
        <Heading css={s.heading}>
          소개
        </Heading>
        <Image
          css={s.image}
          fluid={data.file.childImageSharp.fluid}
          alt="개발자 김찬연"
        />
        <h3 css={s.name}>{data.site.siteMetadata.about.title}</h3>
        <div css={s.content}>
          {_.map((phrase: Phrase) => (
            <p key={phrase.key}>{phrase.value}</p>
            // @ts-ignore
          ), phrases)}
        </div>
      </div>
    </Layout>
  )
}

const s = {
  wrapper: css`
    max-width: ${CONTAINER_MAX_WIDTH}px;
    margin: 0 auto auto;
    padding: 24px 16px;
  `,
  heading: css`
    margin-bottom: 2rem;
  `,
  image: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64%;
    max-width: 322px;
    margin: 0 auto 2rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 50%;
  `,
  name: (theme: Theme): SerializedStyles => css`
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    ${theme.breakpoints.media.sm} {
      font-size: 1.75rem;
    }
  `,
  content: (theme: Theme): SerializedStyles => css`
    color: ${theme.palette.text.primary};
    line-height: 1.8;
  `,
}

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        about {
          title
          content
        }
        siteUrl
      }
    }
    file(relativePath: { eq: "images/profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
