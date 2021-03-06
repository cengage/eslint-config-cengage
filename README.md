# eslint-config-cengage

This is a shared eslint configuration for JavaScript projects across Cengage.

## Usage

### Non-React projects

- Install `eslint-config-cengage` with: `npm i -D eslint-config-cengage`
- Install peer dependencies: 

```sh
npm i --save-dev \
    "eslint-config-cengage@^2.0.0" \
    "babel-eslint@^10.1.0" \
    "eslint@^7.9.0" \
    "eslint-plugin-import@^2.22.0" \  
    "eslint-plugin-jest@^24.0.2" \
    "eslint-config-prettier@^7.0.0"\
    "eslint-plugin-unicorn@^22.0.0" \
   ```

- Create `.eslintrc` file in the project root with the following content

```json
{
  "extends": "cengage"
}
```

**This is a base configuration. You should extend this as needed with project specific options, such as `env` entries or specific plugins for your test framework.**

### React projects

- Install `eslint-config-cengage` with: `npm i -D eslint-config-cengage`
- Install peer dependencies: 
```sh
npm i --save-dev \
    "eslint-config-cengage@^2.0.0" \ 
    "babel-eslint@^10.1.0" \
    "eslint@^7.9.0" \
    "eslint-plugin-import@^2.22.0" \  
    "eslint-plugin-jest@^24.0.2" \
    "eslint-plugin-jsx-a11y@^6.3.1" \
    "eslint-config-prettier@^7.0.0"\
    "eslint-plugin-react@^7.21.0" \
    "eslint-plugin-react-hooks@^4.1.2" \   
    "eslint-plugin-unicorn@^22.0.0" \
```

- Create `.eslintrc` file in the project root with the following content (adjusting for the appropriate version of React):

```json
{
  "extends": "cengage/react",
  "settings": {
    "react": {
      "version": "16.4"
    }
  }
}
```

**This is a base configuration. You should extend this as needed with project specific options, such as `env` entries for your test framework.**

### TypeScript support

To enable typescript support, add the following dependencies to your project. 

```sh
npm i --save-dev \
    "eslint-config-prettier@^7.0.0"\
    "@typescript-eslint/eslint-plugin@^4.2.0" \
    "@typescript-eslint/parser@^4.2.0" \
    "typescript@^3.9.4"
```

The default cengage installation will automatically override the configuration for any `*.ts` or `*.tsx` files.

### Lightweight Base

If even the default `cengage` configuration forces too many rules, you can choose to extend `cengage/base` which adds a minimal amount of rules with no overides for neither jest nor typescript and will force you to manually almost all the rules that are needed. This is not recommended.

- Install `eslint-config-cengage` with: `npm i -D eslint-config-cengage`
- Install peer dependencies: 

```sh
npm i --save-dev \
  "eslint-config-cengage@^2.0.0" \ 
  "eslint@^7.9.0" \
  "eslint-plugin-import@^2.22.0" \
  "eslint-config-prettier@^7.0.0"\
  "eslint-plugin-unicorn@^22.0.0" \
```

- Create `.eslintrc` file in the project root with the following content

```json
{
  "extends": "cengage/base"
}
```


## Config Rules and Settings

### Rules

#### Default

The default config specifies rules by extending the `eslint:recommended` rule set.

#### React

The React config builds on the default settings, so it enforces the `eslint:recommended` rules and adds some more.

##### eslint-plugin-react

`plugin:react/recommended`

##### eslint-plugin-jsx-a11y

`plugin:jsx-a11y/recommended`

##### Rule overrides

The React config also overrides a couple of these rules.

- To avoid unnecessary refactoring work as these rules are adopted, the `react/boolean-prop-naming` and `react/prop-types` rules have been downgraded to warnings. These should be addressed so they can be set to errors in future updates, but can be addressed when time permits.
- `jsx-a11y/heading-has-content` is currently turned off to work around [an issue](https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/440). This issue has been addressed in [#437](https://github.com/evcohen/eslint-plugin-jsx-a11y/pull/437) but has not been released yet. Once updates are available, this rule will be enabled by removing the override.

```js
rules: {
  'react/boolean-prop-naming': 1,
  'react/prop-types': 1,
  'jsx-a11y/heading-has-content': 0
}
```

### Environments

eslint environments provide pre-defined globals for specific environments. The shared defaults include `browser` and `node`. Your project config should specify any additional environments needed (see [Additional Environments](#additional-environments) below).

## Local configuration

This plugin enforces the stylistic preferences defined in your project's Prettier config via eslint. **This is the only place that eslint should be enforcing stylistic rules.**

### Additional Environments

There are options for test frameworks that should be included for your framework(s). Learn more here: [Specifying environments](https://eslint.org/docs/user-guide/configuring#specifying-environments)

### Additional rules

Your team may choose to enforce additional rules, on your project(s) as long as you follow these guidelines:

1.  Your rules can be more strict, but not reduce the strictness of any of the existing rules. In cases where a rule from this config is causing too much friction, you may temporarily override that rule and discuss with UI architecture if that rule should be changed in the standard, if the exception can be made for your project, or if you need to address that in your codebase.
2.  Your rules do not conflict with any of the standard rules or automated formatting.
3.  You are prepared to remove these rules if they conflict with standard rules in future updates.
4.  Do not add rules that enforce stylistic options. Code format should be handled via Prettier. The `eslint-config-prettier` dependency is used to disable the rules that would conflict with prettier.

This is subjective, so not listed as a guideline:

**Consider the value and tradeoffs before adding overly restrictive rules to your team's ESLint config. Your added rules should not cause more friction than value.**

## Project Structure

### Exposed configs

- `index.js` - default configuration for any JS project
- `react.js` - React specific configuration. Builds on the

### Shared settings

- `lib/default.js` contains the common defaults used for both React and non-React configs.

## Contributing

These settings are a starting point. Adjustments can be made if we find that new rules are needed or some rule is causing too much friction for a particular team. Ideally, we'll land on a standard set of rules that is acceptable to all teams, understanding that some personal preferences will need to be put aside in the interest of standardization.
