<script lang="jsx">
import { computed, onMounted, ref } from "vue"
import { data } from "@/posts.data.js"
import Paginator from "../Paginator/index.vue"
import Tags from "../Tags/index.vue"

export default {
  setup(props, context) {
    const pageNumb = ref(1)
    const pageSize = ref(10)

    const posts = data.filter((post) => !post.draft)

    const total = computed(() => {
      return Math.ceil(posts.length / pageSize.value)
    })

    const pages = computed(() => {
      const start = (pageNumb.value - 1) * pageSize.value
      const end = pageNumb.value * pageSize.value

      return posts.slice(start, end)
    })

    return () => (
      <div>
        <ul class="article-list">
          {pages.value.map((post) => (
            <li class="article-list__item">
              <article class="article">
                <div>
                  <h2 class="article-title">
                    <a href={post.url}>{post.title}</a>
                  </h2>
                  {post.excerpt ? (
                    <div
                      v-html={post.excerpt}
                      class="article-excerpt"
                    />
                  ) : (
                    <div class="article-excerpt">这里没有摘要哦...</div>
                  )}
                </div>
                <div class="article-footer">
                  <span class="article-date">{post.date.string}</span>
                  <Tags tags={post.tag} />
                </div>
              </article>
            </li>
          ))}
        </ul>
        <Paginator
          v-models={[
            [pageNumb.value, "pageNumb"],
            [pageSize.value, "pageSize"],
          ]}
          total={total.value}
        />
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.article {
  &-list {
    &__item {
      & + & {
        margin-top: 24px;
      }
    }
  }

  &-title {
    color: var(--vp-c-text-1);
    font-size: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    & a:hover {
      color: var(--vp-c-brand-1);
    }
  }

  &-excerpt {
    margin-top: 24px;
    color: var(--vp-c-text-2);
    overflow: hidden;
  }

  &-footer {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  &-date {
    color: var(--vp-c-text-3);
    line-height: 24px;
  }
}
</style>
