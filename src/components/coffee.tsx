/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

type Props = {
  slug: string;
}

const Coffee = ({ slug }: Props) => (
  <React.Fragment>
    <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" />
    <a
      css={s.root}
      target="_blank"
      rel="noopener noreferrer"
      href={`https://buymeacoff.ee/${slug}`}
    >
      <img
        css={s.image}
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span>
        Buy me a coffee
      </span>
    </a>
  </React.Fragment>
)

const s = {
  root: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    border-radius: 2px;
    color: #ffffff;
    background-color: #FF813F;
    font-family: 'Cookie', cursive;
    font-size: 1.75rem;
    font-weight: 700;
    text-align: center;
    transition: opacity 0.4s, box-shadow 0.4s;
    box-shadow: 0 2px 8px 0 rgba(225,129,63,.35);
    :hover, :focus {
      color: #ffffff;
      opacity: 0.87;
      box-shadow: 0 4px 16px 0 rgba(255,129,63,.45);
    }
  `,
  image: css`
    width: 20px;
    height: auto;
    margin-right: 1rem;
  `,
}

export default Coffee

