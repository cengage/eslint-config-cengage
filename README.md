# eslint-config-cengage

**Note: This is a WIP and is not _quite_ ready to be published. - Expect changes before this is "official"**

This is a shared eslint configuration for JavaScript projects across Cengage.

## Usage

### Non-React projects

- Install `eslint-config-cengage` - TODO: Add npm cmd with nexus path
- Install peer dependencies: `npm install --save-dev eslint eslint-plugin-prettier`
- Create `.eslintrc` file in the project root with the following content (adjusting for the appropriate version of React):

```json
{
  "extends": "cengage"
}
```

**This is a base configuration. You should extend this as needed with project specific options, such as `env` entries for your test framework.**

### React projects

- Install `eslint-config-cengage` - TODO: Add npm cmd with nexus path
- Install peer dependencies: `npm install --save-dev eslint eslint-plugin-prettier eslint-plugin-jsx-a11y eslint-plugin-react`
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

## Config Rules and Settings

### Environments

eslint environments provide pre-defined globals for specific environments. The shared defaults include `browser` and `node`. Your project config should specify any additional environments needed. There are options for test frameworks that should be included for your framework(s). Learn more here: [Specifying environments](https://eslint.org/docs/user-guide/configuring#specifying-environments)

### Rules

#### Default

The default config specifies rules by extending the `eslint:recommended` rule set.

The default settings also include the `eslint-plugin-prettier` package and specify one rule to enable this:

```js
rules: {
  'prettier/prettier': 'error'
}
```

This plugin enforces the stylistic preferences defined in your project's Prettier config via eslint. **This is the only place that eslint should be enforcing stylistic rules.**

_Note: I'm considering moving this out of the default settings and handling it differently, at least in the short-term._

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

## Project Structure

### Exposed configs

- `index.js` - default configuration for any JS project
- `react.js` - React specific configuration. Builds on the

### Shared settings

- `lib/default.js` contains the common defaults used for both React and non-React configs.

## Contributing

These settings are a starting point. Adjustments can be made if we find that new rules are needed or some rule is causing too much friction for a particular team. Ideally, we'll land on a standard set of rules that is acceptable to all teams, understanding that some personal preferences will need to be put aside in the interest of standardization.
