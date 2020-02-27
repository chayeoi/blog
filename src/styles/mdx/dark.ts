import { css } from '@emotion/core'

const dark = css`
  @import url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css');

  .gatsby-highlight-code-line {
    background-color: #010b12;
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
    color: #bfc7d5;
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
    background: #191919;
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
    color: #bfc7d5;
    background: #191919;
    white-space: normal;
    transition: background-color 0.3s;
  }

  .attr-name {
    color: #ffcb6b;
  }
  .attr-value {
    color: #ff5572;
  }
  .comment, .block-comment, .prolog, .doctype, .cdata {
    color: #697098;
  }
  .function-name, .constant, .deleted {
    color: #82aaff;
  }
  .token.symbol,
  .token.property {
    color: #80cbc4;
  }
  .number {
    color: #f78c6c;
  }
  .boolean {
    color: #ff5874;
  }
  .tag {
    color: #ff5572;
  }
  .string {
    color: #addb67;
  }
  .punctuation {
    color: #c792ea;
  }
  .selector, .char, .builtin, .inserted {
    color: #89ddff;
  }
  .function {
    color: #82aaff;
  }
  .operator, .entity, .url, .variable {
    color: #89ddff;
  }
  .keyword {
    color: #ff5572;
  }
  .at-rule, .class-name {
    color: #09d3ac;
  }
  .rule {
    color: #ff5572;
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
    :hover, :focus {
      color: #2979ff;
    }
  }
`

export default dark
