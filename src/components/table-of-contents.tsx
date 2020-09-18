/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import _ from 'lodash/fp'
import { useCallback, useEffect, useState } from 'react'

import { TOC_ITEM_SPACING } from '../constants'
import { Theme } from '../models/Theme'
import TocItem from '../models/TocItem'

interface Props {
  toc: TocItem[];
}

const TableOfContents = ({ toc, ...otherProps }: Props) => {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)

  const theme: Theme = useTheme()

  const observe = useCallback((data: TocItem[], observer: IntersectionObserver): void => {
    _.forEach((item: TocItem): void => {
      const element = document.querySelector<HTMLHeadingElement>(`#${item?.slug as string}`)

      if (!element) {
        return
      }

      observer.observe(element)

      if (item.items) {
        observe(item.items, observer)
      }
    }, data)
  }, [])

  useEffect(() => {
    const options = {
      rootMargin: '0px 0px -80% 0px',
    }
    const observer = new IntersectionObserver(entries => {
      _.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSlug(entry.target.id)
        }
      }, entries)
    }, options)

    observe(toc, observer)

    return () => {
      observer.disconnect()
    }
  }, [observe, toc])

  return (
    <div css={s.root} {...otherProps}>
      <ul css={s.toc}>
        {_.map(item => (
          <li key={item.slug ?? item.title} css={s.item}>
            <a
              css={s.anchor}
              style={activeSlug === item.slug
                ? {
                  color: theme.palette.primary.main,
                  transform: 'scale(1.05) translateX(8px)',
                }
                : undefined}
              href={`#${item.slug as string}`}
            >
              {item.title}
            </a>
            {item.items && (
              <ul style={{ marginLeft: TOC_ITEM_SPACING }}>
                {_.map(item => (
                  <li key={item.slug} css={s.item}>
                    <a
                      css={s.anchor}
                      style={activeSlug === item.slug
                        ? {
                          color: theme.palette.primary.main,
                          transform: 'scale(1.05) translateX(8px)',
                        }
                        : undefined}
                      href={`#${item.slug as string}`}
                    >
                      {item.title}
                    </a>
                    {item.items && (
                      <ul style={{ marginLeft: TOC_ITEM_SPACING }}>
                        {_.map(item => (
                          <li key={item.slug} css={s.item}>
                            <a
                              css={s.anchor}
                              style={activeSlug === item.slug
                                ? {
                                  color: theme.palette.primary.main,
                                  transform: 'scale(1.05) translateX(8px)',
                                }
                                : undefined}
                              href={`#${item.slug as string}`}
                            >
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
    width: 224px;
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
  anchor: css`
    display: block;
    transition: color 0.2s, transform 0.2s;
  `,
}

export default TableOfContents
