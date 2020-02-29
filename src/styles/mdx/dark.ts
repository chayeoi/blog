import { css } from '@emotion/core'

/**
 * sdras/night-owl-vscode-theme
 * https://github.com/sdras/night-owl-vscode-theme
 * customized by chayeoi
 */

const dark = css`
  @import url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css');

  .gatsby-highlight-code-line {
    background-color: #023751;
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
    color: #d6deeb;
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
    background: #011627;
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
    color: #d6deeb;
    background: #011627;
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
    color: #addb67;
    font-style: italic;
  }

  .comment, .block-comment, .prolog, .cdata {
    color: #637777;
    font-style: italic;
  }

  .string, .url {
    color: #addb67;
  }

  .variable {
    color: #d6deeb;
  }

  .number {
    color: #f78c6c;
  }

  .builtin, .char, .constant, .function {
    color: #82aaff;
  }

  .punctuation {
    color: #c792ea;
  }

  .selector, .doctype {
    color: #c792ea;
    font-style: italic;
  }

  .class-name {
    color: #ffcb8b;
  }

  .tag, .operator, .keyword {
    color: #7fdbca;
  }

  .boolean {
    color: #ff5874;
  }

  .property {
    color: #80cbc4;
  }

  .namespace {
    color: #b2ccd6;
  }

   .attr-value {
     color: #82aaff;
   }

   .important {
     color: #ff5572;
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

export default dark
