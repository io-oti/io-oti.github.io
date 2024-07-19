<script lang="jsx">
import { ref } from "vue"

export default {
  props: {
    tags: {
      type: String,
      default: "Tag",
    },
  },
  setup(props, context) {
    const tags = props.tags.split(",")

    return () => (
      <>
        {tags.map((tag) => (
          <span class="tag">{tag}</span>
        ))}
      </>
    )
  },
}
</script>

<style lang="scss" scoped>
.tag {
  padding: 4px 8px;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  background: var(--vp-c-bg-soft);

  &-blue {
    background-color: var(--color-blue);
  }

  span + & {
    margin-left: 12px;
  }
}
</style>
