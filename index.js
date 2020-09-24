const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  env: {
    jest: true
  },
  extends: [
    require.resolve('./base'),
  ],
  parser: 'babel-eslint',
  overrides: [
    {
      plugins: ['jest'],
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      
      // https://github.com/jest-community/eslint-plugin-jest#rules
      rules: {
        'jest/expect-expect': 'warn',
        'jest/no-identical-title': 'warn',
        'jest/valid-describe': 'warn',
        'jest/valid-expect': 'warn',
        'jest/valid-expect-in-promise': 'warn',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:import/typescript'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      // If adding a typescript-eslint version of an existing ESLint rule,
      // make sure to disable the ESLint rule here.
      rules: {
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
        'default-case': 'off',
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
        'no-dupe-class-members': 'off',
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
        'no-undef': 'off',

        // Add TypeScript specific rules (and turn off ESLint equivalents)
        '@typescript-eslint/consistent-type-assertions': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
            ignoreRestSiblings: true,
          },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
      },
    }
  ],
  // NOTE: When adding rules here, you need to make sure they are compatible with
  // `typescript-eslint`, as some rules such as `no-array-constructor` aren't compatible.
  rules: {
    // Blacklist browser globals that we are potentially confusing and dangerous.
    // To use them, explicitly reference them, e.g. `window.name` or `window.status`.
    'no-restricted-globals': ['error'].concat(restrictedGlobals), 
  }
};
