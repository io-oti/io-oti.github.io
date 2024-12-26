<script lang="jsx">
import Collapse from '@/components/Collapse/index'
import { data } from '@/posts.data.js'

export default {
  setup() {
    const categories = reactive(
      data
        .reduce((categories, post) => {
          const label = post.tag
          const value = false
          const category = categories.find(category => category.label === label)

          if (category) {
            category.posts.push(post)
          } else {
            categories = [...categories, { label, value, posts: [post] }]
          }

          return categories
        }, [])
        .sort((a, b) => a.label.localeCompare(b.label))
    )

    const onChange = ({ label, value }) => {
      for (let category of categories) {
        if (label === category.label) {
          category.value = value
        } else {
          category.value = value ? false : category.value
        }
      }
    }

    return () => (
      <div class="page-container">
        <div class="categories">
          {categories.map(({ label, value, posts }) => (
            <Collapse
              size="small"
              label={label}
              count={posts.length}
              modelValue={value}
              onUpdate:modelValue={$event => onChange({ label, value: $event })}
            >
              {{
                default: () => (
                  <ul class="post-list">
                    {posts.map(post => (
                      <li class="post-item">
                        <a
                          class="post-title"
                          href={post.url}
                        >
                          {post.title}
                        </a>
                        <span class="post-date">
                          {post.date.string.slice(-5)}
                        </span>
                      </li>
                    ))}
                  </ul>
                ),
              }}
            </Collapse>
          ))}
        </div>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.categories {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  .post {
    &-count {
      width: 36px;
      height: 36px;
      color: var(--vp-c-text-3);
      font-size: 18px;
      font-weight: normal;
      line-height: 36px;
      text-align: center;
      border-radius: 50%;
      transform: scale(0);
      transition: 0.3s;
      visibility: hidden;
    }

    &-list {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      transition: 0.3s;
    }

    &-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-title {
      color: var(--vp-c-text-1);
      font-size: 16px;
      transition: 0.3s;

      &:hover {
        color: var(--vp-c-brand-1);
      }
    }

    &-date {
      color: var(--vp-c-text-3);
      font-family: sans-serif;
      font-size: 14px;
      line-height: 24px;
    }
  }
}

/* Tablet */
@media (max-width: 767px) {
  .categories {
    grid-template-columns: 1fr;
  }
}
</style>
