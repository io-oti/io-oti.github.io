<script lang="jsx">
import Collapse from '@/components/Collapse/index'
import { data } from '@/posts.data.js'

export default {
  setup() {
    const years = reactive(
      data.reduce((years, post, index) => {
        const label = post.date.string.slice(0, 4)
        const value = index === 0
        const year = years.find(year => year.label === label)

        if (year) {
          year.posts.push(post)
        } else {
          years = [...years, { label, value, posts: [post] }]
        }

        return years
      }, [])
    )

    const onChange = ({ label, value }) => {
      for (let year of years) {
        if (label === year.label) {
          year.value = value
        } else {
          year.value = value ? false : year.value
        }
      }
    }

    return () => (
      <div class="page-container">
        <div class="archives">
          {years.map(({ label, value, posts }, key) => (
            <Collapse
              id={key}
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
                        <span class="post-date">
                          {post.date.string.slice(-5)}
                        </span>
                        <a
                          class="post-title"
                          href={post.url}
                        >
                          {post.title}
                        </a>
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
.archives {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  .post {
    &-list {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      transition: 0.3s;
    }

    &-item {
      display: flex;
      align-items: center;
      column-gap: 20px;
    }

    &-title {
      color: var(--vp-c-text-1);
      font-size: 16px;

      &:hover {
        color: var(--vp-c-brand-1);
      }
    }

    &-date {
      color: var(--vp-c-text-3);
      font-family: sans-serif;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
