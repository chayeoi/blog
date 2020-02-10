/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'

import { Theme } from '../../styles/theme'

export const Anchor: React.FC = props => <a css={s.a} {...props} />

const s = {
  a: (theme: Theme): SerializedStyles => css`
    color: ${theme.palette.primary.main};
    :hover {
      text-decoration: underline;
    }
  `,
}
