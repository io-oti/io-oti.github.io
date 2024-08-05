import { onMounted, onUnmounted } from 'vue'
import * as fireflies from '@/utils/fireflies.js'

export function useBackground() {
  const animation = fireflies.init()

  onMounted(() => {
    animation.start()
  })

  onUnmounted(() => {
    animation.stop()
  })
}
