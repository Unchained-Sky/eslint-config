# @unchainedsky/eslint-config [![NPM version](https://img.shields.io/npm/v/@unchainedsky/eslint-config.svg)](https://www.npmjs.com/package/@unchainedsky/eslint-config)

ESLint shareable config used by Unchained-Sky

## Installation

Plugins are peer dependencies so must be installed too.

```bash
# with npm
npm i -D eslint @unchainedsky/eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-next eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort

# with yarn
yarn add -D eslint @unchainedsky/eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-next eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort

# with pnpm
pnpm i -D eslint @unchainedsky/eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-next eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort
```

## Usage

Extend in your `.eslintrc` file

```json
{
  "extends": ["@unchainedsky"]
}
```

Or add the ESLint config to your `package.json`

```json
{
  "eslintConfig": {
    "extends": "@unchainedsky"
  }
}
```

## Plugins

List of plugins used in `@unchainedsky/eslint-config`

- [`typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [`eslint-config-next`](https://www.npmjs.com/package/eslint-config-next)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [`eslint-plugin-simple-import-sort`](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)

## Rules

```json
{
 "indent": [
  "warn",
  "tab",
  {
   "SwitchCase": 1
  }
 ],
 "quotes": [
  "warn",
  "single"
 ],
 "jsx-quotes": [
  "warn",
  "prefer-single"
 ],
 "semi": [
  "warn",
  "never"
 ],
 "comma-dangle": [
  "warn",
  "never"
 ],
 "prefer-const": "warn",
 "arrow-parens": [
  "warn",
  "as-needed"
 ],
 "no-multiple-empty-lines": [
  "warn",
  {
   "max": 1,
   "maxEOF": 0,
   "maxBOF": 0
  }
 ],
 "object-curly-spacing": [
  "warn",
  "always"
 ],
 "no-trailing-spaces": "warn",
 "@typescript-eslint/no-unused-vars": [
  1,
  {
   "vars": "all",
   "args": "after-used",
   "argsIgnorePattern": "^_"
  }
 ],
 "@typescript-eslint/no-empty-function": "warn",
 "@typescript-eslint/no-empty-interface": "warn",
 "@typescript-eslint/member-delimiter-style": [
  "warn",
  {
   "multiline": {
    "delimiter": "semi",
    "requireLast": true
   }
  }
 ],
 "react/self-closing-comp": [
  "warn",
  {
   "component": true,
   "html": true
  }
 ],
 "react/jsx-max-props-per-line": [
  "warn",
  {
   "maximum": 2
  }
 ],
 "react-hooks/rules-of-hooks": "error",
 "react-hooks/exhaustive-deps": "warn",
 "@typescript-eslint/consistent-type-imports": [
  "warn",
  {
   "fixStyle": "inline-type-imports"
  }
 ],
 "simple-import-sort/imports": "warn"
}
```
