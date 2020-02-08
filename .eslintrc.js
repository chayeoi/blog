module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'xo',
    'xo-space/esnext',
    'xo-react/space',
    'xo-typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    'simple-import-sort',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/semi': 'off',
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'complexity': 'off',
    'no-warning-comments': 'off',
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'react/jsx-pascal-case': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/prop-types': 'off',
    'semi': ['error', 'never'],
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
