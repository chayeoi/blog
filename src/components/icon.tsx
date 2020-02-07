import { css } from '@emotion/core'
import React from 'react'

interface Props {
  name: string;
  icon: {
    viewBox?: string;
    path?: string;
  };
}

const Icon: React.FC<Props> = ({ name, icon }) => (
  <svg css={s.root} viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
)

const s = {
  root: css`
    display: inline-block;
    width: 16px;
    height: 16px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-align: center;
    text-transform: none;
    line-height: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  `,
}

export default Icon
