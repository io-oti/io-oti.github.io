import { nextTick, provide } from 'vue'
import { useData } from 'vitepress'

export function useThemeAnimate() {
  const { isDark } = useData()
  const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

  provide('toggle-appearance', async ({ pageX: x, pageY: y }) => {
    if (!enableTransitions()) {
      isDark.value = !isDark.value
      return
    }

    const clipPath = [
      { clipPath: `circle(0px at ${x}px ${y}px)` },
      {
        clipPath: `circle(${Math.hypot(
          Math.max(x, innerWidth - x),
          Math.max(y, innerHeight - y)
        )}px at ${x}px ${y}px)`,
      },
    ]

    await document.startViewTransition(async () => {
      isDark.value = !isDark.value
      await nextTick()
    }).ready

    document.documentElement.animate(
      isDark.value ? clipPath.reverse() : clipPath,
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${
          isDark.value ? 'old' : 'new'
        }(root)`,
      }
    )
  })
}
