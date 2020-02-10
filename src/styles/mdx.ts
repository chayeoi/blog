import { css } from '@emotion/core'

const mdx = css`
  /**
  * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
  * Based on https://github.com/chriskempson/tomorrow-theme
  * @author Rose Pritchard
  * @custoimized by chayeoi
  */

  @import url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css');

  .gatsby-highlight-code-line {
    background-color: hsla(207, 95%, 15%, 1);
    display: block;
    margin-right: -1.2em;
    margin-left: -1.2em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.35em solid #0687f0;
  }

  blockquote {
    color: #999999;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #e0e0e0;
    background: none;
    font-family: 'Fira Code', 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono',
      monospace;
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
    border-radius: 2px;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #183055;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 4px 6px;
    margin: 0 0.1em;
    border-radius: 0.3em;
    color: #212121;
    background: #f5f5f5;
    white-space: normal;
  }

  .attr-name {
    color: #c5a5c5;
  }
  .attr-value {
    color: #8dc891;
  }
  .comment, .block-comment, .prolog, .doctype, .cdata {
    color: #999999;
  }
  .property, .number, .function-name, .constant, .symbol, .deleted {
    color: #5a9bcf;
  }
  .boolean {
    color: #ff8b50;
  }
  .tag {
    color: #fc929e;
  }
  .string {
    color: #8dc891;
  }
  .punctuation {
    color: #8dc891;
  }
  .selector, .char, .builtin, .inserted {
    color: #D8DEE9;
  }
  .function {
    color: #79b6f2;
  }
  .operator, .entity, .url, .variable {
    color: #d7deea;
  }
  .keyword {
    color: #c5a5c5;
  }
  .at-rule, .class-name {
    color: #FAC863;
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


  pre > code.highlight {
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
  }

  /* Anchor */
  .anchor.after, .anchor.before {
    color: #212121;
    font-size: 1rem;
    :hover {
      color: #3d5afe;
    }
  }
`

export default mdx
