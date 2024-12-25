<template>
  <div class="giscus">
    <Giscus v-bind="giscusConfig" />
  </div>
</template>

<script setup>
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'

const { theme, isDark } = useData()

const giscusConfig = ref({ ...theme.value.giscus })

watchPostEffect(() => {
  giscusConfig.value = {
    ...theme.value.giscus,
    theme: `${location.origin}/css/giscus-${
      isDark.value ? 'mocha' : 'latte'
    }.css`,
  }
})
</script>

<style lang="scss" scoped>
.giscus {
  margin-top: 24px;
}
</style>
