<script lang="jsx">
import { data } from '@/posts.data.js'

export default {
  setup() {
    const page = ref(1)
    const pageSize = ref(12)

    const posts = computed(() => data.filter(post => !post.draft))
    // const total = computed(() => Math.ceil(posts.value.length / pageSize.value))
    const pages = computed(() => {
      const start = page.value * pageSize.value
      const end = (page.value + 1) * pageSize.value

      return posts.value.slice(start, end)
    })

    return () => (
      <ul class="post">
        {pages.value.map(({ title, url, date }) => (
          <li
            key={title}
            class="post-item"
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
  flex: 1;
  padding: 20px;
  background: var(--vp-c-bg);
  border-radius: 16px;
  border: 1px solid var(--vp-c-gutter);

  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    line-height: 36px;

    &__title {
      color: var(--vp-c-text-1);
      font-size: 16px;

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
