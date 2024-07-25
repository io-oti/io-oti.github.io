<script lang="jsx">
import { ref, computed } from "vue"
import { data } from "@/posts.data.js"
import List from "@/components/List/index"

export default {
  setup () {
    const categories = data.reduce((res, post) => {
      if (!res.includes(post.tag)) {
        res = [...res, post.tag]
      }

      return res
    }, []).sort()

    const currentTag = ref(categories[0])

    const posts = computed(() => {
      return data.filter((post) => post.tag.includes(currentTag.value))
    })

    const onChangeTag = (category) => currentTag.value = category

    return () => (
      <div class="page-container">
        <ul class="categories">
          {categories.map((category) => (
            <li>
              <Badge
                class={currentTag.value === category ? "active" : ""}
                text={category}
                type='info'
                onclick={() => onChangeTag(category)}
              />
            </li>
          ))}
        </ul>
        <List class="posts">
          {posts.value.map((post) => (
            <li class="post" key={post.title}>
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
  gap: 16px 16px;
}

.VPBadge {
  cursor: pointer;

  &.active {
    color: var(--vp-c-brand-1);
  }
}

.posts {
  margin-top: 24px;

  .post {
    margin: 12px 0px;

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
}
</style>
