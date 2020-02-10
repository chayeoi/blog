/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const Paragraph: React.FC = props => <p css={s.p} {...props} />

const s = {
  p: css`
    margin-bottom: 1.5rem;
  `,
}
