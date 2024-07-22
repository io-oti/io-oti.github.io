<script lang="jsx">
export default {
  props: {
    tags: {
      type: String,
      default: "Tag",
    },
  },
  setup (props) {
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
  color: var(--vp-c-text-2);
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
