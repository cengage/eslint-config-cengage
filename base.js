module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      spread: true,
      restParams: true
    }
  },
  plugins: [
    'unicorn',
    'import'
  ],
  extends: [
    'eslint:recommended'
  ],
  rules: {
    complexity: ['error', 10],
    'one-var': ['error', 'never'],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/tree/master/rules
    'unicorn/no-abusive-eslint-disable': 'error',

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'warn',
    'import/no-webpack-loader-syntax': 'error',
  }
}
