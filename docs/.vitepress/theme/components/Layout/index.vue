<template>
  <Layout>
    <template #layout-top>
      <canvas id="fireflies" />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme"
import { useRoute } from "vitepress"
import { watchEffect } from "vue"
import { Animation } from "../../utils/fireflies.js"

const { Layout } = DefaultTheme
const route = useRoute()
let fireflies = null

watchEffect(
  () => {
    if (route.path === "/") {
      fireflies = new Animation("#fireflies", {
        count: 25,
        color: "rgba(236, 196, 94, 1)",
        speed: 1,
        radius: 2,
      })
    } else {
      fireflies.dispose()
    }
  },
  { flush: "post" }
)
</script>

<style lang="scss" scoped>
.Layout {
  :deep(.VPNav),
  :deep(.VPFooter) {
    backdrop-filter: blur(2px);
  }
}

#fireflies {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
</style>
