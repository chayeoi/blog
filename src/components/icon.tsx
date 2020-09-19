import { css, SerializedStyles } from '@emotion/core'
import React from 'react'

import { Theme } from '../models/Theme'

type Props = {
  name: string;
  icon: {
    viewBox?: string;
    path?: string;
  };
}

const Icon = ({ name, icon, ...otherProps }: Props) => (
  <svg css={s.root} viewBox={icon.viewBox} {...otherProps}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
)

const s = {
  root: (theme: Theme): SerializedStyles => css`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    text-align: center;
    text-transform: none;
    line-height: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    ${theme.breakpoints.media.sm} {
      width: ${theme.typography.pxToRem(18)};
      height: ${theme.typography.pxToRem(18)};
    }
  `,
}

export default Icon
