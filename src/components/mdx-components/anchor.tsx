/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'

import { Theme } from '../../models/Theme'

export const Anchor: React.FC = props => <a css={s.a} target="_blank" {...props} />

const s = {
  a: (theme: Theme): SerializedStyles => css`
    color: ${theme.palette.primary.main};
    :hover, :focus {
      text-decoration: underline;
    }
  `,
}
