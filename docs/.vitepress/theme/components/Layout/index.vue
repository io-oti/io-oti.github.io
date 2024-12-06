<template>
  <canvas
    ref="canvas"
    class="canvas"
  />
  <DefaultTheme.Layout />
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { useFirefly } from '@/hooks/useFirefly.js'
import { useCrawler } from '@/hooks/useCrawler.js'
import { useThemeAnimate } from '@/hooks/useThemeAnimate.js'

useThemeAnimate()

const { isDark } = useData()

const canvas = ref(null)
const firefly = ref(null)
const crawler = ref(null)

const resize = e => {
  if (!e) return

  canvas.value.width = e.target.innerWidth
  canvas.value.height = e.target.innerHeight
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
  z-index: -1;
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
