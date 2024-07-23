<script lang="jsx">
import { data } from "@/posts.data.js"

export default {
  setup (props, context) {
    const archives = data.reduce((res, post) => {
      const year = post.date.string.slice(0, 4)
      const group = res.find((x) => x[0] === year)

      if (group) {
        group.push(post)
      } else {
        res = [...res, [year, post]]
      }

      return res
    }, [])

    return () => (
      <div class="page-container">
        {archives.map(group => (
          <ul class="archives">
            {group.map((post) => {
              return typeof post === 'string'
                ? <li class="archives__year">{post}</li>
                : <li class="archives__item" >
                  <h2 class="post-title">
                    <a href={post.url}>{post.title}</a>
                    <span class="post-date">{post.date.string.slice(-5)}</span>
                  </h2>
                </li>
            })}
          </ul>
        ))}
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.archives {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-right: 2px solid var(--vp-c-border);

  &__year,
  &__item {
    position: relative;
    padding-right: 12px;
    transition: all 0.3s ease-in-out;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: -2px;
      width: 2px;
      height: 24px;
      background-color: transparent;
    }

    &:hover {
      &::after {
        background-color: var(--vp-c-brand-1);
      }
    }
  }

  &__year {
    color: var(--vp-c-text-2);
    font-size: 28px;
    font-weight: bold;
    text-align: right;

    &:hover {
      color: var(--vp-c-text-1);
      border-color: var(--color-red);
    }
  }

  &__item {
    &:hover {
      border-color: var(--color-red);
    }
  }

  &+& {
    margin-top: 32px;
  }
}

.post {
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
</style>
