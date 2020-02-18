/** @jsx jsx */
import { css, jsx } from '@emotion/core'

interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ as: Component = 'h2', children, ...otherProps }) => (
  <Component css={s.root} {...otherProps}>
    {children}
  </Component>
)

const s = {
  root: css`
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
  `,
}

export default Heading
