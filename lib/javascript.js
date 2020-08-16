module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/babel',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  rules: {
    strict: 'error',
    'one-var': ['error', 'never'],
    'check-constructor': 'off',
    'no-comma-dangle': 'off',
    'no-empty-interface': 'off',
    'no-unused-vars': 'off',

    // import
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'import/no-named-as-default': 'off',
  },
}
