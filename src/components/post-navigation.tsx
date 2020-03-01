/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Link } from 'gatsby'
import { useMedia } from 'react-use'

import { ALPHA, ARROW_LEFT_ICON, ARROW_RIGHT_ICON } from '../constants'
import { Theme } from '../models/Theme'
import Icon from './icon'

interface Props {
  pageContext: {
    next?: {
      id: string;
      frontmatter: {
        title: string;
      };
      fields: {
        slug: string;
      };
    };
    previous?: {
      id: string;
      frontmatter: {
        title: string;
      };
      fields: {
        slug: string;
      };
    };
  };
}

const PostNavigation: React.FC<Props> = ({ pageContext }) => {
  const theme: Theme = useTheme()

  const isMedium = useMedia(`(min-width: ${theme.breakpoints.sizes.sm}px)`)

  const hasMargin = pageContext.previous && pageContext.next && !isMedium

  return (
    <ul css={s.linkList}>
      <li css={s.linkItem} style={{ marginBottom: hasMargin ? '0.5rem' : undefined }}>
        {pageContext.previous && (
          <Link css={s.link} to={pageContext.previous.fields.slug}>
            <Icon css={s.icon} name="이전 글" icon={ARROW_LEFT_ICON} />
            <p css={s.paragraph}>
              <span css={s.legend}>이전 글</span>
              <strong css={s.title}>
                {pageContext.previous.frontmatter.title}
              </strong>
            </p>
          </Link>
        )}
      </li>
      <li css={s.linkItem}>
        {pageContext.next && (
          <Link css={s.link} to={pageContext.next.fields.slug}>
            <p css={s.paragraph}>
              <span css={s.legend}>다음 글</span>
              <strong css={s.title}>
                {pageContext.next.frontmatter.title}
              </strong>
            </p>
            <Icon css={s.icon} name="다음 글" icon={ARROW_RIGHT_ICON} />
          </Link>
        )}
      </li>
    </ul>
  )
}

const s = {
  linkList: (theme: Theme): SerializedStyles => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    color: ${theme.palette.text.primary};
    ${theme.breakpoints.media.sm} {
      flex-direction: row;
    }
  `,
  linkItem: (theme: Theme): SerializedStyles => css`
    flex-basis: 48%;
    width: 100%;
    :first-of-type {
      text-align: left;
    }
    :last-of-type {
      text-align: right;
    }
    ${theme.breakpoints.media.sm} {
      :first-of-type {
        margin-right: auto;
        margin-bottom: 0;
        text-align: right;
      }
      :last-of-type {
        margin-left: auto;
        text-align: left;
      }
    }
  `,
  link: (theme: Theme): SerializedStyles => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 16px;
    transition: color 0.2s, background-color 0.2s;
    background-color: ${theme.palette.hexToRgb(theme.palette.text.default, 0.02)};
    :hover, :focus {
      background-color: ${theme.palette.hexToRgb(theme.palette.primary.light, ALPHA)};
    }
    ${theme.breakpoints.media.sm} {
      background-color: transparent;
    }
  `,
  icon: (theme: Theme): SerializedStyles => css`
    display: none;
    li:first-of-type & {
      margin-right: auto;
    }
    li:last-of-type & {
      margin-left: auto;
    }
    ${theme.breakpoints.media.sm} {
      display: block;
      width: 16px;
      height: 16px;
    }
  `,
  paragraph: (theme: Theme): SerializedStyles => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    li:first-of-type & {
      margin-right: auto;
    }
    li:last-of-type & {
      margin-left: auto;
    }
    ${theme.breakpoints.media.sm} {
      li:first-of-type & {
        margin: 0 0 0 0.75rem;
      }
      li:last-of-type & {
        margin: 0 0.75rem 0 0;
      }
    }
  `,
  legend: css`
    font-size: 1rem;
  `,
  title: (theme: Theme): SerializedStyles => css`
    font-size: ${theme.typography.pxToRem(18)};
  `,
}

export default PostNavigation
