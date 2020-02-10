/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const UnorderedList: React.FC = props => <ul css={s.ul} {...props} />

export const OrderedList: React.FC = props => <ol css={s.ol} {...props} />

export const ListItem: React.FC = props => <li css={s.li} {...props} />

const s = {
  ul: css`
    margin-bottom: 1.5rem;
    padding-left: 32px;
    list-style-type: disc;
  `,
  ol: css`
    margin-bottom: 1.5rem;
    padding-left: 32px;
    list-style-type: decimal;
  `,
  li: css`
    margin-bottom: 0.75rem;
  `,
}
