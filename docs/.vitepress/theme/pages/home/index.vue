<script lang="jsx">
import { Transition } from "vue"
import Articles from "@/components/Articles/index"

export default {
  setup(props, context) {
    return () => (
      <Transition name="home">
        <div class="home">
          <Articles />
        </div>
      </Transition>
    )
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: min(100vw - 60px, 900px);
  height: min-content;
  margin: 32px auto;
  padding: 32px;
  border-radius: var(--border-size-4);
  backdrop-filter: blur(2px);
  background-color: var(--vp-c-bg);
}

.home-enter-from,
.home-leave-to {
  opacity: 0;
}

.home-enter-from .home,
.home-leave-to .home {
  transform: scale(1.1);
}
</style>
