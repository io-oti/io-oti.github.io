<script lang="jsx">
import { TransitionGroup } from 'vue'
import gsap from 'gsap'

export default {
  setup(props, { slots }) {
    function onBeforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'translateX(50%)'
    }

    function onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        transform: 'translateX(0%)',
        // ease: `slow(0.7,0.7,false)`,
        // delay: el.dataset.index % 2 * 0.35,
        onComplete: done,
      })
    }

    function onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        transform:
          el.dataset.index % 2 ? 'translateX(50%)' : 'translateX(-50%)',
        // ease: `slow(0.7,0.7,false)`,
        // delay: el.dataset.index % 2 * 0.35,
        onComplete: done,
      })
    }

    return () => (
      <TransitionGroup
        tag="ul"
        css={false}
        class="list"
        onBeforeEnter={onBeforeEnter}
        onEnter={onEnter}
        onLeave={onLeave}
      >
        {slots.default()}
      </TransitionGroup>
    )
  },
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
}
</style>
