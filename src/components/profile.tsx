/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import _ from 'lodash/fp'

import { Theme } from '../models/Theme'

interface Phrase {
  key: number;
  value: string;
}

const Profile: React.FC = props => {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
      site {
        siteMetadata {
          about {
            name
            intro
            job
            region
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
  `)

  const { name, intro, job, region } = data.site.siteMetadata.about

  const phrases = _.compose(
    // @ts-ignore
    _.map.convert({ cap: false })((p: string, index: number): Phrase => ({
      key: index,
      value: _.trim(p),
    })),
    _.filter((p: string) => Boolean(_.trim(p))),
    _.split('\n'),
  )(intro)

  return (
    <div css={s.root} {...props}>
      <Image
        css={s.image}
        fluid={data.file.childImageSharp.fluid}
        alt="개발자 김찬연"
      />
      <div css={s.content}>
        {name && (
          <b css={s.name}>
            {name}
          </b>
        )}
        {intro && (
          <div css={s.intro}>
            {_.map((phrase: Phrase) => (
              <p key={phrase.key}>{phrase.value}</p>
              // @ts-ignore
            ), phrases)}
          </div>

        )}
        <div css={s.secondary}>
          {job && (
            <span css={s.job}>
              Developer
            </span>
          )}
          {job && region && (
            <i css={s.separator} />
          )}
          {region && (
            <address css={s.region}>
              {region}
            </address>
          )}

        </div>
      </div>
    </div>
  )
}

const s = {
  root: css`
    display: flex;
    align-items: center;
    padding: 32px 0;
  `,
  image: (theme: Theme): SerializedStyles => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 96px;
    margin-right: 1rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 50%;
    ${theme.breakpoints.media.sm} {
      width: 128px;
      margin-right: 1.5rem;
    }
  `,
  content: css`
    flex-grow: 1;
    align-self: stretch;
  `,
  name: (theme: Theme): SerializedStyles => css`
    font-size: 1.25rem;
    font-weight: 700;
    ${theme.breakpoints.media.sm} {
      font-size: 1.5rem;
    }
  `,
  intro: (theme: Theme): SerializedStyles => css`
    font-size: ${theme.typography.pxToRem(14)};
    ${theme.breakpoints.media.sm} {
      margin-bottom: 1rem;
    }
  `,
  secondary: css`
    display: flex;
    align-items: center;
  `,
  job: (theme: Theme): SerializedStyles => css`
    color: ${theme.palette.text.tertiary};
    font-size: ${theme.typography.pxToRem(14)};
  `,
  separator: (theme: Theme): SerializedStyles => css`
    width: 4px;
    height: 4px;
    margin: 0 0.5rem;
    border-radius: 50%;
    background-color: ${theme.palette.text.tertiary};
  `,
  region: (theme: Theme): SerializedStyles => css`
    color: ${theme.palette.text.tertiary};
    font-size: ${theme.typography.pxToRem(14)};
  `,
}

export default Profile
