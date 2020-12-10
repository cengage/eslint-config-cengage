module.exports = {
  extends: [
    require.resolve('./index'),
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    
    'react/boolean-prop-naming': 1,
    'react/prop-types': 1,
    'react/display-name': 0,
    
    'jsx-a11y/heading-has-content': 0
  },
  overrides: [{
    files: ['**/*.ts?(x)'],
    ecmaFeatures: {
      jsx: true,
    },
    rules: {
      'react/prop-types': 0,
    }
  }],
};
