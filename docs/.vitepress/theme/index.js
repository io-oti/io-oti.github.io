import Layout from '@/components/Layout/index.vue'
import '@/styles/theme.css'

import Home from '@/pages/Home/index.vue'
import Archives from '@/pages/Archives/index.vue'
import Categories from '@/pages/Categories/index.vue'

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('Home', Home)
    app.component('Archives', Archives)
    app.component('Categories', Categories)
  },
}
