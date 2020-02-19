import { css, SerializedStyles } from '@emotion/core'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import _ from 'lodash/fp'
import React from 'react'

import Heading from '../components/heading'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { CONTAINER_MAX_WIDTH } from '../constants'
import { Theme } from '../models/Theme'

interface Para {
  key: number;
  value: string;
}

interface Props {
  data: {
    site: {
      siteMetadata: {
        about: {
          title: string;
          content: Para[];
        };
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
}

const AboutPage: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO title="About" />
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
      <p css={s.paragraph}>
        {_.map((para: { key: number; value: string }): React.ReactNode => (para.value === '\n'
          ? <br key={para.key} />
          : <span key={para.key}>{para.value}</span>
        ), data.site.siteMetadata.about.content)}
      </p>
    </div>
  </Layout>
)

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
  name: css`
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
  `,
  paragraph: (theme: Theme): SerializedStyles => css`
    color: ${theme.palette.grey[800]};
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
          content {
            key
            value
          }
        }
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
