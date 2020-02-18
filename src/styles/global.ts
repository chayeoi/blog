import { css, SerializedStyles } from '@emotion/core'

import { Theme } from '../models/Theme'
import mdx from './mdx'

const global = (theme: Theme): SerializedStyles => css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  progress {
    vertical-align: baseline;
  }
  [hidden],
  template {
    display: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:active, a:hover, a:focus {
    color: ${theme.palette.primary.main};
    outline-width: 0;
    transition: color 0.2s;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b, strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  em {
    font-style: italic;
  }

  dfn {
    font-style: italic;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  optgroup {
    font-weight: 700;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type="reset"],
  [type="submit"],
  button,
  html [type="button"] {
    -webkit-appearance: button;
  }

  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: ${theme.palette.grey[900]};
    word-break: keep-all;
    font-family:
      'Avenir Next',
      'Futura PT',
      'Spoqa Han Sans',
      'spoqahansans',
      'Apple SD Gothic Neo',
      'Nanum Barun Gothic',
      'Nanum Gothic',
      Verdana,
      Arial,
      'Malgun Gothic',
      Dotum,
      sans-serif;
    margin: 0;
    word-break: keep-all;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f1f2f6;
  }
  ${mdx}
`

export default global
