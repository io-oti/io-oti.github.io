<script lang="jsx">
import { computed, onMounted, ref } from "vue"
import { data } from "@/posts.data.js"
import Paginator from "../Paginator/index.vue"

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
      <div class="article">
        <ul class="article-list">
          {pages.value.map((post) => (
            <li class="article-item">
              <a
                class="article-item__title"
                href={post.url}
              >
                {post?.title}
              </a>
              <span class="article-item__date">{post?.date?.string}</span>
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
  // &-list {
  // }

  &-item {
    display: flex;
    justify-content: space-between;
    margin: 12px 0;

    &__title {
      color: var(--vp-c-text-1);
      font-size: 18px;

      &:hover {
        font-weight: bold;
      }
    }

    &__date {
      color: var(--vp-c-text-3);
    }
  }
}
</style>
