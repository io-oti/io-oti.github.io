import Layout from '@/components/Layout/index.vue'
import Content from '@/components/Content/index.vue'
import '@/styles/theme.css'

export default {
  Layout,
  enhanceApp ({ app }) {
    app.component('Content', Content)
  },
}
