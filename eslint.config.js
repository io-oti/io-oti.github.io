import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  {
    rules: {
      "vue/multi-word-component-names": 0
    }
  }
]
