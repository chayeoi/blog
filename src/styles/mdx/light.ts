import { css } from '@emotion/core'

/**
 * sdras/night-owl-vscode-theme
 * https://github.com/sdras/night-owl-vscode-theme
 * customized by chayeoi
 */

const light = css`
  @import url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css');

  .gatsby-highlight-code-line {
    background-color: #f5f5f5;
    display: block;
    margin-right: -1.2em;
    margin-left: -1.2em;
    padding-right: 1em;
    padding-left: 1.2em;
  }

  blockquote {
    color: #9e9e9e;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #403f53;
    background: none;
    font-family: 'Fira Code', 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.6;
    font-size: 13px;

    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }

  pre[class*='language-']::-webkit-scrollbar {
    display: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    margin: 1.5em 0;
    padding: 1.2em;
    overflow: auto;
    border-radius: 3px;
    background: #fbfbfb;
    transition: background-color 0.3s;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 4px 6px;
    margin: 0 0.1em;
    border-radius: 0.3em;
    color: #212121;
    background: #f5f5f5;
    white-space: normal;
    transition: background-color 0.3s;
  }

  .changed {
    color: #a2bffc;
    font-style: italic;
  }

  .deleted {
    color: rgba(239, 83, 80, 0.56);
    font-style: italic;
  }

  .inserted, .attr-name {
    color: #4876d6;
    font-style: italic;
  }

  .comment, .block-comment, .prolog, .cdata {
    color: #989fb1;
    font-style: italic;
  }

  .string, .builtin, .char, .constant, .url {
    color: #4875d6;
  }

  .variable {
    color: #c96765;
  }

  .number {
    color: #aa0982;
  }

  .punctuation {
    color: #994cc3;
  }

  .function {
    color: #994cc3;
  }

  .selector, .doctype {
    color: #994cc3;
    font-style: italic;
  }

  .class-name {
    color: #111111;
  }

  .tag {
    color: #994cc3;
  }

  .operator, .property, .keyword, .namespace {
    color: #0c969b;
  }

  .boolean {
    color: #bc5454;
  }

  /* Anchor */
  .anchor.after, .anchor.before {
    color: #212121;
    font-size: 1rem;
    :hover, :focus {
      color: #2979ff;
    }
  }
`

export default light
