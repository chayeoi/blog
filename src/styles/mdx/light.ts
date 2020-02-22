import { css } from '@emotion/core'

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
    color: #24292e;
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
    background: #fafafa;
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

  .attr-name {
    color: #005cc5;
  }
  .attr-value {
    color: #032f62;
  }
  .comment, .block-comment, .prolog, .doctype, .cdata {
    color: #6a737d;
  }
  .property, .number, .function-name, .constant, .symbol, .deleted {
    color: #6f42c1;
  }
  .boolean {
    color: #005cc5;
  }
  .tag {
    color: #22863a;
  }
  .string {
    color: #032f62;
  }
  .punctuation {
    color: #24292e;
  }
  .selector, .char, .builtin, .inserted {
    color: #005cc5;
  }
  .function {
    color: #6f42c1;
  }
  .operator, .entity, .url, .variable {
    color: #005cc5;
  }
  .keyword {
    color: #d73a49;
  }
  .at-rule, .class-name {
    color: #e36209;
  }
  .rule {
    color: #d73a49;
  }
  .important {
    font-weight: 400;
  }
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .namespace {
    opacity: 0.7;
  }


  /* pre > code.highlight {
    outline: .4em solid #FF7E7B;
    outline-offset: .4em;
  }
  .line-numbers .line-numbers-rows {
    border-right-color: #5C6975;
  }
  .line-numbers-rows > span:before {
    color: #74818D;
  }
  .line-highlight {
    background: #E6ECF133;
    background: linear-gradient(to right, #E6ECF133 70%, #E6ECF100);
  } */

  /* Anchor */
  .anchor.after, .anchor.before {
    color: #212121;
    font-size: 1rem;
    :hover {
      color: #3d5afe;
    }
  }
`

export default light
