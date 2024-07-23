<script lang="jsx">
export default {
  props: {
    tag: {
      type: String,
      default: "Tag",
    },
  },
  setup (props) {
    return () => (<span class="tag">{props.tag}</span>)
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
    color: var(--vp-c-text-1);
    background-color: var(--color-blue);
  }

  span+& {
    margin-left: 12px;
  }
}
</style>
