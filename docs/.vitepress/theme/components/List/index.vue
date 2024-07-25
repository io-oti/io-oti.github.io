<script lang="jsx">
import { TransitionGroup } from "vue"
import gsap from 'gsap'

export default {
  setup (props, { slots }) {
    function onBeforeEnter (el) {
      el.style.opacity = 0
      el.style.height = 0
    }

    function onEnter (el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '24px',
        ease: 'back.inOut(1.7)',
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    }

    function onLeave (el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        ease: 'back.inOut(1.7)',
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    }

    return () => (
      <TransitionGroup
        tag="ul"
        css={false}
        onBeforeEnter={onBeforeEnter}
        onEnter={onEnter}
        onLeave={onLeave}
      >
        {slots.default()}
      </TransitionGroup>
    )
  }
}
</script>
