/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import _ from 'lodash/fp'

import { TOC_ITEM_SPACING } from '../constants'
import { Theme } from '../models/Theme'
import TocItem from '../models/TocItem'

interface Props {
  toc: TocItem[];
}

const TableOfContents: React.FC<Props> = ({ toc, ...otherProps }) => {
  return (
    <div css={s.root} {...otherProps}>
      <ul css={s.toc}>
        {_.map(item => (
          <li key={item.slug} css={s.item}>
            <a href={`#${item.slug as string}`}>
              {item.title}
            </a>
            {item.items && (
              <ul style={{ marginLeft: TOC_ITEM_SPACING }}>
                {_.map(item => (
                  <li key={item.slug} css={s.item}>
                    <a href={`#${item.slug as string}`}>
                      {item.title}
                    </a>
                    {item.items && (
                      <ul style={{ marginLeft: TOC_ITEM_SPACING }}>
                        {_.map(item => (
                          <li key={item.slug} css={s.item}>
                            <a href={`#${item.slug as string}`}>
                              {item.title}
                            </a>
                          </li>
                        ), item.items)}
                      </ul>
                    )}
                  </li>
                ), item.items)}
              </ul>
            )}
          </li>
        ), toc)}
      </ul>
    </div>
  )
}

const s = {
  root: (theme: Theme): SerializedStyles => css`
    display: none;
    width: 240px;
    color: ${theme.palette.text.secondary};
    font-size: ${theme.typography.pxToRem(14)};
    ${theme.breakpoints.media.lg} {
      display: block;
    }
    ${theme.breakpoints.media.xl} {
      width: 256px;
    }
  `,
  toc: (theme: Theme): SerializedStyles => css`
    padding-left: 32px;
    a:hover, a:focus {
      color: ${theme.palette.primary.main};
    }
  `,
  item: css`
    position: relative;
  `,
}

export default TableOfContents
