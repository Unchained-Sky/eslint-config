import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import tanstackQuery from '@tanstack/eslint-plugin-query'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const ignores = ['**/dist', '**/out']

export default tseslint.config(
	{
		extends: [
			js.configs.recommended
		],
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
		ignores,
		languageOptions: {
			ecmaVersion: 'latest',
			globals: globals.browser
		},
		plugins: {
			'@stylistic': stylistic
		},
		rules: {
			...stylistic.configs['recommended-flat'].rules,
			'@stylistic/indent': ['warn', 'tab'],
			'@stylistic/no-tabs': 'off',
			'@stylistic/comma-dangle': ['warn', 'never'],
			'@stylistic/quotes': ['warn', 'single'],
			'@stylistic/jsx-quotes': ['warn', 'prefer-single'],
			'@stylistic/arrow-parens': ['warn', 'as-needed'],
			'@stylistic/jsx-indent-props': 'off',
			'@stylistic/brace-style': ['warn', '1tbs']
		}
	},

	{
		extends: [
			...tseslint.configs.strictTypeChecked
		],
		files: ['**/*.{ts,tsx,mts,cts}'],
		ignores,
		languageOptions: {
			parserOptions: {
				projectService: true
			}
		},
		rules: {
			'@typescript-eslint/consistent-type-imports': ['warn', { fixStyle: 'inline-type-imports' }],
			'@typescript-eslint/no-unused-vars': ['warn', {
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_'
			}],
			'@typescript-eslint/no-confusing-void-expression': 'off'
		}
	},

	{
		extends: [
			...tanstackQuery.configs['flat/recommended']
		],
		settings: {
			react: {
				version: '18.3'
			}
		},
		files: ['**/*.{jsx,tsx}'],
		ignores,
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			react
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			'react/self-closing-comp': [
				'warn',
				{
					component: true,
					html: true
				}
			],
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			]
		}
	}
)
