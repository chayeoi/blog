/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'

import { Theme } from '../models/Theme'

type Props = React.HTMLProps<HTMLAnchorElement | HTMLButtonElement> & { as?: string }

const ShareLink: React.FC<Props> = ({ as: Component = 'a', ...otherProps }) => (
  <Component css={s.root} {...otherProps} />
)

const s = {
  root: (theme: Theme): SerializedStyles => css`
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: center / cover no-repeat;
    cursor: pointer;
    outline: none;
    transition: opacity 0.2s, box-shadow 0.2s, transform 0.2s;
    :hover, :focus {
      opacity: 0.85;
      box-shadow: 0 4px 8px 0 ${theme.palette.hexToRgb(theme.palette.primary.dark, 0.1)};
      transform: translateY(-4px);
    }
    ${theme.breakpoints.media.sm} {
      width: 40px;
      height: 40px;
    }
  `,
}

export default ShareLink
