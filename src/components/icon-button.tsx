/** @jsx jsx */
import { css, jsx } from '@emotion/core'

interface Props {
  as?: 'button' | 'a';
  children: React.ReactNode;
  href?: HTMLAnchorElement['href'];
  rel?: HTMLAnchorElement['rel'];
  target?: HTMLAnchorElement['target'];
}

/**
 * @link https://codepen.io/atulcodex/pen/NWPJPVM
 */

const IconButton: React.FC<Props> = ({ as: Component = 'button', children, ...otherProps }) => (
  <Component css={s.root} {...otherProps}>
    {children}
  </Component>
)

const s = {
  root: css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b6bbc5;
    width: 100%;
    height: 100%;
    padding: 12px;
    border-radius: 50%;
    text-decoration: none;
    box-shadow:
      1rem 1rem 2rem rgba(0,0,0,.1),
      -1rem 1rem 2rem rgba(255,255,255,.5);
    :hover, :focus {
      box-shadow:
        inset 1rem 1rem 2rem rgba(0,0,0,.1),
        inset -1rem -1rem 2rem rgba(255,255,255,.5);
    }
  `,
}

export default IconButton
