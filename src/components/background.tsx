/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'

import { Theme } from '../models/Theme'

const Background: React.FC = props => (
  <div css={s.root} {...props} />
)

const s = {
  root: (theme: Theme): SerializedStyles => css`
    background-color: ${theme.palette.background.default};
    transition: background-color 0.3s;
  `,
}

export default Background
