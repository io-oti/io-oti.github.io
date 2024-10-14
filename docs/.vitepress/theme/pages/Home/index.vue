<script lang="jsx">
import { data } from '@/posts.data.js'
import Paginator from '@/components/Paginator/index.vue'

export default {
  setup() {
    const pageSize = ref(10)

    const posts = computed(() => data.filter(post => !post.draft))

    return () => (
      <Paginator
        v-models={[[pageSize.value, 'pageSize']]}
        data={posts.value}
        v-slots={{
          default: ({ title, url, date, tag }) => (
            <div
              key={title}
              class="post"
            >
              <h2 class="post-title">
                <a href={url}>{title}</a>
              </h2>
              <div class="post-desc">
                <span class="post-date">{date.string}</span>
                <Badge
                  text={tag}
                  type="info"
                />
              </div>
            </div>
          ),
        }}
      />
    )
  },
}
</script>

<style lang="scss" scoped>
.post {
  width: calc(50% - 12px);
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
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

/* Mobile */
@media (max-width: 426px) {
  .post {
    width: 100%;
  }
}
</style>
