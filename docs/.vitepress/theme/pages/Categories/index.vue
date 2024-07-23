<script lang="jsx">
import { ref, computed } from "vue"
import { data } from "@/posts.data.js"
import Tags from "@/components/Tags/index.vue"

export default {
  setup (props, context) {
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
              <Tags
                class={currentTag.value === category ? "tag-text" : ""}
                tag={category}
                onclick={() => onChangeTag(category)}
              />
            </li>
          ))}
        </ul>
        <ul class="posts">
          {posts.value.map((post) => (
            <li class="post">
              <h2 class="post-title">
                <a href={post.url}>{post.title}</a>
                <span class="post-date">{post.date.string}</span>
              </h2>
            </li>
          ))}
        </ul>
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

.tag {
  font-size: 14px;
  cursor: pointer;

  &-text {
    color: var(--vp-c-brand-1);
  }
}

.posts {
  margin-top: 24px;

  .post {
    margin: 12px 0px;
    padding: 0px 8px 0px 0px;

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
