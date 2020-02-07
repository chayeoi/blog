import { css, keyframes, SerializedStyles } from '@emotion/core'
import React from 'react'

import { Theme } from '../styles/theme'

const Wave: React.FC = props => (
  <svg css={s.root} viewBox="0 0 120 28" {...props}>
    <defs>
      <mask id="xxx">
        <circle cx="7" cy="12" r="40" fill="#fff" />
      </mask>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 13 -9" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
      <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
    </defs>
    <use id="wave-1" css={s.wave1} xlinkHref="#wave" x="0" y="1" />
    <use id="wave-2" css={s.wave2} xlinkHref="#wave" x="0" y="0" />
    <use id="wave-3" css={s.wave3} xlinkHref="#wave" x="0" y="-2" />
  </svg>
)

const wave = keyframes`
  to {
    transform: translateX(-100%);
  }
`

const s = {
  root: css`
    width: 100%;
  `,
  wave1: (theme: Theme): SerializedStyles => css`
    animation: ${wave} 3s linear infinite;
    fill: ${theme.palette.primary.main};
  `,
  wave2: (theme: Theme): SerializedStyles => css`
    opacity: 0.6;
    animation: ${wave} 5s linear infinite reverse;
    fill: ${theme.palette.primary.main};
  `,
  wave3: (theme: Theme): SerializedStyles => css`
    opacity: 0.3;
    animation: ${wave} 7s linear infinite;
    fill: ${theme.palette.primary.main};
  `,
}

export default Wave
