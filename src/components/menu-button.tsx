import { css } from '@emotion/core'
import React from 'react'

import Burger from './burger'

const MenuButton = (props: object) => (
  <button css={s.button} type="button" {...props}>
    <Burger />
  </button>
)

const s = {
  button: css`
  padding: 8px 12px;
  `,
}

export default MenuButton
