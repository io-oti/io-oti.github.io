<template>
  <DefaultTheme.Layout />
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useBackground } from '@/hooks/useBackground.js'
import { useThemeAnimate } from '@/hooks/useThemeAnimate.js'

useBackground()
useThemeAnimate()
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

  :deep(.VPSwitchAppearance) {
    width: 22px;

    & .check {
      transform: none;
    }
  }
}
</style>
