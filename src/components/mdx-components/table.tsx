/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { useEffect, useRef, useState } from 'react'

import { Theme } from '../../models/Theme'

export const Table = (props: object) => <table css={s.table} {...props} />

export const TableRow = (props: object) => <tr css={s.tr} {...props} />

export const TableCell = (props: object) => {
  const [isHead, setIsHead] = useState(false)

  const elementRef = useRef<HTMLTableCellElement>(null)

  const Component = isHead ? 'th' : 'td'

  useEffect(() => {
    if (elementRef.current?.closest('thead')) {
      setIsHead(true)
    }
  }, [])

  return <Component ref={elementRef} css={isHead ? s.th : s.td} {...props} />
}

const s = {
  table: css`
    margin-bottom: 2rem;
    width: 100%;
    border-collapse: collapse;
    page-break-inside: auto;
  `,
  tr: (theme: Theme): SerializedStyles => css`
    font-weight: 500;
    border-bottom: 1px solid ${theme.palette.grey[200]};
  `,
  th: css`
    padding: 8px;
    font-weight: 700;
  `,
  td: css`
    padding: 8px;
  `,
}
