<script lang="jsx">
import { data } from '@/posts.data.js'
import List from '@/components/List/index'

export default {
  setup() {
    const categories = data
      .reduce((res, post) => {
        if (post.tag && !res.includes(post.tag)) {
          res = [...res, post.tag]
        }

        return res
      }, [])
      .sort()

    const currentTag = ref(categories[0])

    const posts = computed(() => {
      return data.filter(post => post.tag?.includes(currentTag.value))
    })

    const onChangeTag = category => (currentTag.value = category)

    return () => (
      <div class="page-container">
        <ul class="categories">
          {categories.map(category => (
            <li>
              <Badge
                class={currentTag.value === category ? 'active' : ''}
                text={category}
                type="info"
                onclick={() => onChangeTag(category)}
              />
            </li>
          ))}
        </ul>
        <List class="posts">
          {posts.value.map((post, index) => (
            <li
              class="post"
              key={post.title}
              data-index={index}
            >
              <h2 class="post-title">
                <a href={post.url}>{post.title}</a>
                <span class="post-date">{post.date.string}</span>
              </h2>
            </li>
          ))}
        </List>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px 24px;
}

.VPBadge {
  width: 100%;
  cursor: pointer;

  &.active {
    color: var(--vp-c-brand-1);
  }
}

.posts {
  margin-top: 24px;

  .post {
    width: calc(50% - 12px);
    padding: 16px;
    background: var(--vp-c-bg-soft);
    border-radius: 16px;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: var(--vp-c-bg-elv);
    }

    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--vp-c-text-1);
      font-size: 16px;

      a:hover {
        color: var(--vp-c-brand-1);
      }
    }

    &-date {
      color: var(--vp-c-text-3);
      font-size: 16px;
      line-height: 24px;
    }
  }

  /* Mobile */
  @media (max-width: 426px) {
    .post {
      width: 100%;
    }
  }
}
</style>
