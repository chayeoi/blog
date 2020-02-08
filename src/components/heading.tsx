import { css, SerializedStyles } from '@emotion/core'
import React from 'react'

import { Theme } from '../styles/theme'

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
    font-size: 2rem;
    font-weight: 700;
    ::after {
      content: '';
      flex-grow: 1;
      height: 1px;
      margin-left: 0.75rem;
      background-color: ${theme.palette.grey[700]};
    }
  `,
}

export default Heading
