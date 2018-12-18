module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
      spread: true,
      restParams: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: ["unicorn"],
  rules: {
    complexity: ["error", 10],
    "one-var": ["error", "never"],
    "unicorn/no-abusive-eslint-disable": "error"
  }
};
