/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const Paragraph = (props: object) => <p css={s.p} {...props} />

const s = {
  p: css`
    margin-bottom: 1.5rem;
  `,
}
