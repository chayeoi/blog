/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const UnorderedList = (props: object) => <ul css={s.ul} {...props} />

export const OrderedList = (props: object) => <ol css={s.ol} {...props} />

export const ListItem = (props: object) => <li css={s.li} {...props} />

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
