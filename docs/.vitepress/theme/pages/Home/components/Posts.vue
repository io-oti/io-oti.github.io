<script lang="jsx">
import { data } from '@/posts.data.js'

export default {
  setup() {
    const page = ref(1)
    const pageSize = ref(12)

    const posts = computed(() => {
      const start = (page.value - 1) * pageSize.value
      const end = page.value * pageSize.value

      return data.slice(start, end)
    })

    return () => (
      <ul class="post">
        {posts.value.map(({ title, url, date }) => (
          <li
            class="post-item"
            key={title}
          >
            <a
              class="post-item__title"
              href={url}
            >
              {title}
            </a>
            <span class="post-item__date">{date.string}</span>
          </li>
        ))}
      </ul>
    )
  },
}
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  flex: 1;
  padding: 20px;
  border-radius: 16px;

  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &__title {
      color: var(--vp-c-text-1);
      font-size: 16px;
      transition: 0.3s;

      &:hover {
        color: var(--vp-c-brand-1);
      }
    }

    &__date {
      color: var(--vp-c-text-3);
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>
