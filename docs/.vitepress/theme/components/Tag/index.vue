<script lang="jsx">
import { ref } from "vue"

export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
  setup(props, context) {
   return () => <div class="tag">{props.text}</div>
  }
}
</script>

<style lang="scss" scoped>
.tag {
  background: var(--vp-c-bg);
}
</style>
