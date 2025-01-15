import js from '@eslint/js';
import globals from 'globals';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';
import stylisticJs from '@stylistic/eslint-plugin-js';
export default [
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      'react-hooks': eslintReactHooks,
      react: eslintReact,
      import: importPlugin,
    },
  },
  {
    ignores: ['node_modules', 'dist', 'build'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: eslintReact.configs.recommended.parserOptions,
    },
  },
  {
    files: ['**/*{js,jsx}'],
    rules: {
      ...eslintConfigPrettier.rules,
      '@stylistic/js/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'import/no-unresolved': [2, { caseSensitive: false }],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'import/order': [
        2,
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
];
