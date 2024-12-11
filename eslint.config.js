import globals from 'globals'
import pluginJs from '@eslint/js'
import markdown from '@eslint/markdown'
import pluginVue from 'eslint-plugin-vue'
import autoImport from './.eslintrc-auto-import.js'

export default [
  ...pluginVue.configs['flat/recommended'].map(config => ({
    ...config,
    files: ['docs/**/*.vue'],
  })),
  {
    name: 'files-to-ignore',
    ignores: [
      'docs/.vitepress/cache',
      'docs/.vitepress/dist',
      'docs/.vitepress/temp',
    ],
  },
  {
    name: 'files-to-lint',
    files: ['docs/**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...autoImport.globals,
        __dirname: true,
      },
      parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    name: 'markdown-to-lint',
    files: ['docs/**/*.md'],
    plugins: {
      markdown,
    },
    language: 'markdown/commonmark',
    rules: {
      ...markdown.configs.recommended[0].rules,
      'markdown/no-missing-label-refs': 'off',
    },
  },
]
