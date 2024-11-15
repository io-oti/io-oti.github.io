import DefaultTheme from 'vitepress/theme'
import '@/style/design.css'

import Layout from '@/components/Layout/index.vue'

import Home from '@/pages/Home/index.vue'
import Profile from '@/pages/Profile/index.vue'
import Archives from '@/pages/Archives/index.vue'
import Categories from '@/pages/Categories/index.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp ({ app }) {
    app.component("Home", Home)
    app.component("Profile", Profile)
    app.component("Archives", Archives)
    app.component("Categories", Categories)
  }
}
