<template>
  <div class="giscus">
    <Giscus v-bind="giscusConfig" />
  </div>
</template>

<script setup>
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'

const { theme, isDark } = useData()

const giscusConfig = computed(() => ({
  ...theme.value.giscus,
  theme: isDark.value ? 'dark' : 'light',
  repoId: import.meta.env.VITE_GISCUS_REPO_ID,
  categoryId: import.meta.env.VITE_GISCUS_CATEGORY_ID,
  // theme: isDark.value
  //   ? 'https://giscus.catppuccin.com/themes/mocha.css'
  //   : 'https://giscus.catppuccin.com/themes/latte.css',
}))
</script>

<style lang="scss" scoped>
.giscus {
  margin-top: 24px;
}
</style>
