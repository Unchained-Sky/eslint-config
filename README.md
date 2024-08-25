# @unchainedsky/eslint-config [![NPM version](https://img.shields.io/npm/v/@unchainedsky/eslint-config.svg)](https://www.npmjs.com/package/@unchainedsky/eslint-config)

ESLint shareable flat config used by Unchained-Sky

## Installation

Requires eslint@>=9

```bash
npm i -D eslint @unchainedsky/eslint-config
```

```bash
yarn add -D eslint @unchainedsky/eslint-config
```

```bash
pnpm add -D eslint @unchainedsky/eslint-config
```

## Usage

Export in your `eslint.config.js` file

```js
import eslintConfig from '@unchainedsky/eslint-config'
export default eslintConfig
```

To add custom rules, spread the config

```js
import eslintConfig from '@unchainedsky/eslint-config'
export default [
 ...eslintConfig,
 {
  rules: {
   'semi': ['always', 'warn']
  }
 }
]
```
