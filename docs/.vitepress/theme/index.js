import DefaultTheme from 'vitepress/theme'
import './style/custom.css'

import Layout from './components/Layout/index.vue'

import Home from './pages/Home/index.vue'
import Archives from './pages/Archives/index.vue'
import Categories from './pages/Categories/index.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp ({ app }) {
    app.component("Home", Home)
    app.component("Archives", Archives)
    app.component("Categories", Categories)
  }
}
