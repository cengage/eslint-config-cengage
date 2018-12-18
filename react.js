module.exports = {
  extends: [
    "cengage/lib/default",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["react", "jsx-a11y"],
  parser: "babel-eslint",
  env: {
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/boolean-prop-naming": 1,
    "react/prop-types": 1,
    "jsx-a11y/heading-has-content": 0
  }
};
