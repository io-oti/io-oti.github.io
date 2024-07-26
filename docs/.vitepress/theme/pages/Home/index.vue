<script lang="jsx">
import { ref, computed, onMounted, onUnmounted } from "vue"
import { data } from "@/posts.data.js"
import Paginator from "@/components/Paginator/index.vue"
import List from "@/components/List/index"
import ArrowLeft from "@/components/Icons/ArrowLeft.vue"
import ArrowRight from "@/components/Icons/ArrowRight.vue"

export default {
  setup () {
    const paginator = ref(null)
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

    const onPrevPage = () => {
      paginator.value.onPrevPage()
    }

    const onNextPage = () => {
      paginator.value.onNextPage()
    }

    const keydown = (e) => {
      if (e.code === 'ArrowLeft') onPrevPage()
      if (e.code === 'ArrowRight') onNextPage()
    }

    onMounted(() => {
      window.addEventListener('keydown', keydown)
    })

    onUnmounted(() => {
      window.removeEventListener('keydown', keydown)
    })

    return () => (
      <div class="page-container">
        <Paginator
          v-models={[
            [pageNumb.value, "pageNumb"],
            [pageSize.value, "pageSize"],
          ]}
          total={total.value}
          ref={paginator}
        />
        <button
          className="prev"
          onClick={onPrevPage}
        >
          <ArrowLeft />
        </button>
        <List>
          {pages.value.map((post, index) => (
            <li
              key={post.title}
              data-index={index}
              class="post"
            >
              <h2 class="post-title">
                <a href={post.url}>{post.title}</a>
              </h2>
              <div class="post-desc">
                <span class="post-date">{post.date.string}</span>
                <Badge
                  text={post.tag}
                  type="info"
                />
              </div>
            </li>
          ))}
        </List>
        <button
          className="next"
          onClick={onNextPage}
        >
          <ArrowRight />
        </button>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.post {
  width: calc(50% - 12px);
  padding: 16px;
  background: var(--vp-c-bg-soft);
  border-radius: var(--border-size-3);
  transition: background 0.3s ease-in-out;

  &:hover {
    background: var(--vp-c-bg-elv);
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
    align-items: baseline;
    justify-content: space-between;
    margin-top: 12px;
  }

  &-date {
    color: var(--vp-c-text-3);
    font-size: 14px;
    line-height: 23.6px;
  }
}

.prev,
.next {
  position: fixed;
  top: calc(50% - 52px);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 16px 8px;
  border-radius: var(--border-size-2);
  background: var(--vp-c-bg-soft);

  svg {
    fill: var(--vp-c-text-3);
  }

  &:hover {
    svg {
      fill: var(--vp-c-brand-1);
    }
  }
}

.prev {
  left: -25%;
}

.next {
  right: -25%;
}

/* Mobile */
@media (max-width: 426px) {
  .post {
    width: 100%;
  }
}
</style>
