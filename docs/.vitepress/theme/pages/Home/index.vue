<script lang="jsx">
import Articles from "@/components/Articles/index"

export default {
  setup () {
    return () => (
      <div class="page-container">
        <Articles />
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: min(100vw - 64px, 900px);
  margin: 32px auto;
  padding: 32px;
  border-radius: var(--border-size-4);
  backdrop-filter: blur(2px);
  background-color: var(--vp-c-bg);
}

/* Mobile */
@media (max-width: 426px) {
  .home {
    width: min(100vw - 32px, 425px);
    margin: 16px;
    padding: 16px;
  }
}
</style>
