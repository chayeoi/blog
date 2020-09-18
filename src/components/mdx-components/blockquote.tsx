/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'

import { Theme } from '../../models/Theme'

export const Blockquote = (props: object) => <blockquote css={s.blockquote} {...props} />

const s = {
  blockquote: (theme: Theme): SerializedStyles => css`
    margin-bottom: 1.5rem;
    padding-left: 0.75rem;
    border-left: 4px solid ${theme.palette.grey[100]};
  `,
}
