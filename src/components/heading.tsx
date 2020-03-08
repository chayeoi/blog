/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'

import { Theme } from '../models/Theme'

interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ as: Component = 'h2', children, ...otherProps }) => (
  <Component css={s.root} {...otherProps}>
    {children}
  </Component>
)

const s = {
  root: (theme: Theme): SerializedStyles => css`
    display: flex;
    align-items: center;
    font-size: 1.75rem;
    font-weight: 700;
    ${theme.breakpoints.media.sm} {
      font-size: 2rem;
    }
  `,
}

export default Heading
