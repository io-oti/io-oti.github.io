<script lang="jsx">
import { computed, onMounted, ref } from "vue"
import { data } from "@/docs.data.js"
import Pagination from "../Pagination/index.vue"

export default {
  setup(props, context) {
    const pageNumb = ref(1)
    const pageSize = ref(10)

    const total = computed(() => {
      return Number((data.length / pageSize.value).toFixed())
    })

    const posts = computed(() => {
      const start = (pageNumb.value - 1) * pageSize.value
      const end = pageNumb.value * pageSize.value

      return data.slice(start, end)
    })

    onMounted(() => {})

    return () => (
      <div class="article">
        <ul class="article-list">
          {posts.value.map((post) => (
            <li class="article-item">
              <a
                class="article-item__title"
                href={post.url}
              >
                {post?.title || "--"}
              </a>
              <span class="article-item__date">
                {post?.date?.string || "--"}
              </span>
            </li>
          ))}
        </ul>
        <Pagination
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
  }

  &-item {
    display: flex;
    justify-content: space-between;
    margin: 12px 0;

    &__title {
      color: var(--color-text);
      font-size: 20px;

      &:hover {
        font-weight: bold;
      }
    }

    &__date {
      color: var(--color-subtext-0);
    }
  }
}
</style>
