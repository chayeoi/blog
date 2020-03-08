/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import dayjs from 'dayjs'
import Image from 'gatsby-image'
import { useMemo } from 'react'

import { CONTAINER_MAX_WIDTH } from '../constants'
import { Theme } from '../models/Theme'
import UnstructuredTocItem from '../models/UnstructuredTocItem'
import { getTocCreator } from '../utils'
import Sticky from './sticky'
import TableOfContents from './table-of-contents'

interface Props {
  frontmatter: {
    title: string;
    description: string;
    publishedAt: string;
    updatedAt: string;
    tags: string[];
    cover?: {
      childImageSharp: {
        fluid: {
          aspectRatio: number;
          sizes: string;
          src: string;
          srcSet: string;
        };
      };
      publicURL: string;
      internal: {
        mediaType: string;
      };
    };
  };
  tableOfContents: {
    items: UnstructuredTocItem[];
  };
}

const Headline: React.FC<Props> = ({ frontmatter, tableOfContents }) => {
  const {
    title,
    description,
    updatedAt,
    publishedAt,
    cover,
  } = frontmatter

  const isModified = updatedAt && publishedAt !== updatedAt
  const hasCover = Boolean(cover)

  const toc = useMemo(() => getTocCreator()(tableOfContents.items, 3), [tableOfContents.items])

  return (
    <header css={s.header}>
      <div css={s.container}>
        <h1 css={s.heading}>{title}</h1>
        <p css={s.description}>
          {description}
        </p>
        <ul css={s.dateList}>
          <li>
            <time dateTime={publishedAt}>
              {dayjs(publishedAt).format('YYYY년 MM월 DD일')}
            </time>
            {isModified && (
              <span>
                {' '}
                작성
              </span>
            )}
          </li>
          {isModified && (
            <li>
              <time dateTime={updatedAt}>
                {dayjs(updatedAt).format('YYYY년 MM월 DD일')}
              </time>
              <span>
                {' '}
                수정
              </span>
            </li>
          )}
        </ul>
        <div css={s.toc}>
          <Sticky top={112}>
            <TableOfContents toc={toc} />
          </Sticky>
        </div>
      </div>
      {hasCover
        ? (
          <div css={s.cover}>
            <Image css={s.image} fluid={cover?.childImageSharp.fluid} alt=""/>
          </div>
        ) : (
          <div css={s.placeholder} />
        )}
    </header>
  )
}

const s = {
  header: (theme: Theme): SerializedStyles => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 360px;
    color: #ffffff;
    ::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -10;
      background: ${theme.palette.hexToRgb(theme.palette.grey[800], 0.4)};
    }
  `,
  container: css`
    position: relative;
    width: 100%;
    padding: 24px 16px;
    max-width: ${CONTAINER_MAX_WIDTH}px;
    margin: 0 auto;
  `,
  heading: css`
    margin-bottom: 0.5rem;
    padding-top: 40px;
    font-size: 1.75rem;
    font-weight: 700;
  `,
  cover: css`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -100;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  `,
  image: css`
    height: 100%;
  `,
  placeholder: (theme: Theme): SerializedStyles => css`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -100;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: ${theme.palette.primary.dark};
  `,
  description: (theme: Theme): SerializedStyles => css`
    margin-bottom: 1.5rem;
    color: ${theme.palette.primary.contrastText};
  `,
  dateList: (theme: Theme): SerializedStyles => css`
    font-size: ${theme.typography.pxToRem(14)};
    font-weight: 300;
    text-align: right;
  `,
  toc: (theme: Theme): SerializedStyles => css`
    position: absolute;
    left: 100%;
    top: calc(100% + 96px);
    margin-left: 1.5rem;
    ${theme.breakpoints.media.xl} {
      margin-left: 4.5rem;
    }
  `,
}

export default Headline
