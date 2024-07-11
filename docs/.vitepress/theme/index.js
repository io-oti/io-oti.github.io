import DefaultTheme from 'vitepress/theme'
import './style/custom.css'

import Layout from './components/Layout/index.vue'

import home from './pages/home/index.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp ({ app }) {
    app.component("home", home)
  }
}
