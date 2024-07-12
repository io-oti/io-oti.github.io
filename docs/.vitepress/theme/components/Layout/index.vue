<template>
  <Layout>
    <template #layout-top>
      <canvas id="fireflies" />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme"
import { useData, useRoute } from "vitepress"
import { watchEffect, onMounted, onUnmounted, nextTick, provide } from "vue"
import { Animation } from "../../utils/fireflies.js"

const { Layout } = DefaultTheme
const { isDark } = useData()
const route = useRoute()
let fireflies = null

const enableTransitions = () =>
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches

provide("toggle-appearance", async ({ clientX: x, clientY: y }) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: "ease-out",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    }
  )
})

// watchEffect(
//   () => {
//     if (route.path === "/") {
//       fireflies = new Animation("#fireflies", {
//         count: 25,
//         color: "rgba(236, 196, 94, 1)",
//         speed: 1,
//         radius: 2,
//       })
//     } else {
//       fireflies && fireflies.dispose()
//     }
//   },
//   { flush: "post" }
// )

onMounted(() => {
  fireflies = new Animation("#fireflies", {
    count: 25,
    color: "rgba(236, 196, 94, 1)",
    speed: 1,
    radius: 2,
  })
})

onUnmounted(() => {
  fireflies.dispose()
})
</script>

<style lang="scss" scoped>
.Layout {
  :deep(.VPNav),
  :deep(.VPFooter) {
    backdrop-filter: blur(2px);
  }

  :deep(.VPNavScreen) {
    height: 100vh;
  }
}

#fireflies {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
