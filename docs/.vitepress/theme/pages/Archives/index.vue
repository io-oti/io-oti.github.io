<script lang="jsx">
import { data } from "@/posts.data.js"

export default {
  setup () {
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
  border-right: 2px solid var(--vp-c-border);

  &__year,
  &__item {
    position: relative;
    padding: 6px 12px 6px;
    transition: all 0.3s var(--timing-1);

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: -2px;
      width: 2px;
      height: 36px;
      background-color: transparent;
    }
  }

  &__year {
    margin-bottom: 16px;
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
      border-top-left-radius: var(--border-size-2);
      border-bottom-left-radius: var(--border-size-2);
      background-color: var(--vp-c-bg-alt);
      border-color: var(--color-red);

      &::after {
        background-color: var(--vp-c-brand-1);
      }
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
