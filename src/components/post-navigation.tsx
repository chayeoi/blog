/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { Link } from 'gatsby'

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

const PostNavigation: React.FC<Props> = ({ pageContext }) => (
  <ul css={s.linkList}>
    <li css={s.linkItem}>
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

const s = {
  linkList: (theme: Theme): SerializedStyles => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    color: ${theme.palette.text.primary};
    ${theme.breakpoints.media.md} {
      flex-direction: row;
    }
  `,
  linkItem: (theme: Theme): SerializedStyles => css`
    flex-basis: 48%;
    width: 100%;
    :first-of-type {
      margin-bottom: 0.5rem;
      text-align: left;
    }
    :last-of-type {
      text-align: right;
    }
    ${theme.breakpoints.media.md} {
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
    ${theme.breakpoints.media.md} {
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
    ${theme.breakpoints.media.md} {
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
    ${theme.breakpoints.media.md} {
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
