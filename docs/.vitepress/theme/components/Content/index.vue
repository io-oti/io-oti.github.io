<script lang="jsx">
import { useData, useRoute } from 'vitepress'
import { contentUpdatedCallbacks } from 'vitepress/dist/client/app/utils'
import { h } from 'vue'

const runCbs = () => contentUpdatedCallbacks.forEach(fn => fn())

export default {
  name: 'CustomContent',
  props: {
    as: {
      type: [Object, String],
      default: 'div',
    },
  },
  setup(props) {
    const route = useRoute()
    const { frontmatter, site } = useData()

    console.log('index.vue:', route.component.render)
    watch(frontmatter, runCbs, { deep: true, flush: 'post' })

    return () =>
      h(
        props.as,
        site.value.contentProps ?? { style: { position: 'relative' } },
        [
          h('h1', { id: frontmatter.value.title, tabindex: -1 }, [
            frontmatter.value.title,
            h('a', {
              class: 'header-anchor',
              href: '#' + frontmatter.value.title,
              ariaLabel: `Permalink to "${frontmatter.value.title}"`,
            }),
          ]),
          route.component
            ? h(route.component, {
                onVnodeMounted: runCbs,
                onVnodeUpdated: runCbs,
                onVnodeUnmounted: runCbs,
              })
            : '404 Page Not Found',
        ]
      )
  },
}
</script>
