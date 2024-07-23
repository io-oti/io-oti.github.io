<script lang="jsx">
import { ref, computed } from "vue"
import { data } from "@/posts.data.js"
import Paginator from "@/components/Paginator/index.vue"
import Tags from "@/components/Tags/index.vue"

export default {
  setup () {
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
      <>
        <ul class="post-list">
          {pages.value.map((post) => (
            <li>
              <article class="post">
                <h2 class="post-title">
                  <a href={post.url}>{post.title}</a>
                </h2>
                <div class="post-desc">
                  <Tags tag={post.tag} />
                  <span class="post-date">{post.date.string}</span>
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
      </>
    )
  },
}
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  &-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-title {
    color: var(--vp-c-text-1);
    font-size: 16px;

    a:hover {
      color: var(--vp-c-brand-1);
    }
  }

  &-desc {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &-date {
    color: var(--vp-c-text-3);
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
