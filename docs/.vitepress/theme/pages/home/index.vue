<script lang="jsx">
import Articles from "@/components/Articles/index";

export default {
  setup(props, context) {
    return () => <div class="home"><Articles /></div>
  }
}
</script>

<style lang="scss" scoped>
.home {
  max-width: 720px;
  margin: 32px auto;
  padding: 32px;
  border-radius: var(--border-size-4);
  backdrop-filter: blur(2px);
  background-color: var(--vp-c-bg);
}
</style>
