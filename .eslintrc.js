module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'@typescript-eslint',
		'react',
		'react-hooks',
		'simple-import-sort'
	],
	ignorePatterns: [
		'vite.config.ts'
	],
	extends: [
		'eslint:recommended',
		'next/core-web-vitals',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:@next/next/recommended'
	],
	env: {
		node: true
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'indent': [
			'warn',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'quotes': [
			'warn',
			'single'
		],
		'jsx-quotes': [
			'warn',
			'prefer-single'
		],
		'semi': [
			'warn',
			'never'
		],
		'comma-dangle': [
			'warn',
			'never'
		],
		'prefer-const': 'warn',
		'arrow-parens': [
			'warn',
			'as-needed'
		],
		'no-multiple-empty-lines': [
			'warn',
			{
				'max': 1,
				'maxEOF': 0,
				'maxBOF': 0
			}
		],
		'object-curly-spacing': [
			'warn',
			'always'
		],
		'no-trailing-spaces': 'warn',
		'@typescript-eslint/no-unused-vars': [
			1,
			{
				'vars': 'all',
				'args': 'after-used',
				'argsIgnorePattern': '^_'
			}
		],
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-empty-interface': 'warn',
		'@typescript-eslint/member-delimiter-style': [
			'warn',
			{
				'multiline': {
					'delimiter': 'semi',
					'requireLast': true
				}
			}
		],
		'react/self-closing-comp': [
			'warn',
			{
				'component': true,
				'html': true
			}
		],
		'react/jsx-max-props-per-line': [
			'warn',
			{
				'maximum': 2
			}
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				'fixStyle': 'inline-type-imports'
			}
		],
		'simple-import-sort/imports': 'warn'
	}
}