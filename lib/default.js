module.exports = {
  extends: 'eslint:recommended',
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      spread: true,
      restParams: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    complexity: ['error', 10],
    'one-var': ['error', 'never']
  }
}
