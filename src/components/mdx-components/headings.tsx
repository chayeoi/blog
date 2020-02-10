/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const H1: React.FC = props => <h1 css={s.h1} {...props} />

export const H2: React.FC = props => <h1 css={s.h2} {...props} />

export const H3: React.FC = props => <h1 css={s.h3} {...props} />

export const H4: React.FC = props => <h1 css={s.h4} {...props} />

export const H5: React.FC = props => <h1 css={s.h5} {...props} />

export const H6: React.FC = props => <h1 css={s.h6} {...props} />

const s = {
  h1: css`
    margin: 3rem 0 1.5rem;
    font-size: 1.625rem;
    font-weight: 700;
  `,
  h2: css`
    margin: 3rem 0 1.5rem;
    font-size: 1.5rem;
    font-weight: 700;
  `,
  h3: css`
    margin: 2rem 0 1rem;
    font-size: 1.375rem;
    font-weight: 700;
  `,
  h4: css`
    margin: 2rem 0 1rem;
    font-size: 1.25rem;
    font-weight: 700;
  `,
  h5: css`
    margin: 1.5rem 0 0.75rem;
    font-size: 1.125rem;
    font-weight: 700;
  `,
  h6: css`
    margin: 1.5rem 0 0.75rem;
    font-size: 1rem;
    font-weight: 700;
  `,
}