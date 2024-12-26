<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <canvas
        ref="canvas"
        class="canvas"
      />
    </template>
    <template #doc-after>
      <Comments />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import Comments from '@/components/Comments/index.vue'

import { useData } from 'vitepress'
import { useFirefly } from '@/hooks/useFirefly.js'
import { useCrawler } from '@/hooks/useCrawler.js'
import { useAppearance } from '@/hooks/useAppearance.js'

useAppearance()

const { isDark } = useData()

const canvas = ref(null)
const firefly = ref(null)
const crawler = ref(null)

const resize = () => {
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
}

watch(
  () => isDark.value,
  isDark => {
    isDark ? firefly.value.start() : firefly.value.stop()
    !isDark ? crawler.value.start() : crawler.value.stop()
  }
)

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  firefly.value = useFirefly(canvas.value).firefly
  crawler.value = useCrawler(canvas.value).crawler

  isDark.value ? firefly.value.start() : crawler.value.start()
})
</script>

<style lang="scss" scoped>
.canvas {
  position: fixed;
}

.Layout {
  :deep(.VPNav),
  :deep(.VPFooter) {
    backdrop-filter: blur(2px);
  }

  :deep(.VPNavScreen) {
    height: 100vh;
  }

  :deep(.VPSwitchAppearance) {
    width: 22px;

    & .check {
      transform: none;
    }
  }
}
</style>
